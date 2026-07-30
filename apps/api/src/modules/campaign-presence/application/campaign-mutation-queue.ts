export class CampaignMutationQueue {
  private readonly pendingByCampaign = new Map<string, Promise<void>>()

  run<Result>(campaignId: string, mutation: () => Promise<Result>): Promise<Result> {
    const previous = this.pendingByCampaign.get(campaignId) ?? Promise.resolve()
    const result = previous.catch(() => undefined).then(mutation)
    const pending = result.then(
      () => undefined,
      () => undefined,
    )

    this.pendingByCampaign.set(campaignId, pending)
    void pending.then(() => {
      if (this.pendingByCampaign.get(campaignId) === pending) {
        this.pendingByCampaign.delete(campaignId)
      }
    })

    return result
  }
}
