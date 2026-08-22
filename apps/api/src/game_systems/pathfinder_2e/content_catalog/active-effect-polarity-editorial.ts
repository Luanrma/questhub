// QH-EFF-012 editorial polarity decisions for PF2e `effect` definitions.
//
// These entries are intentionally keyed by stable definitionKey. They are reviewed
// presentation metadata, not runtime inference. A definition remains NEUTRAL when its
// semantics are mixed/contextual/ambiguous; absence from this overlay does not create a
// kind-based fallback and leaves the already-versioned baseline decision unchanged.
//
// Product decision (2026-08-22): classify semantically unequivocal effects individually.

export type Pathfinder2eEditorialEffectPolarity = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'

export const PATHFINDER_2E_EFFECT_POLARITY_EDITORIAL = Object.freeze({
  // Harmful: the effect only imposes a detrimental state, penalty, weakness or restriction.
  'bestiary-effects:0aRm0b55015XPj7Y': 'HARMFUL', // Swarming Bites
  'bestiary-effects:1bOSJ2LbEC28aI9f': 'HARMFUL', // Despair
  'bestiary-effects:1UHjPz8hgdnrN3zL': 'HARMFUL', // Deny Fate
  'bestiary-effects:1wCgwFLJByW8YKyM': 'HARMFUL', // Sacrifice Armor
  'bestiary-effects:2ccLQxmTlTPySnOR': 'HARMFUL', // Technology Control
  'bestiary-effects:2TlbtDHEGcFG8NPF': 'HARMFUL', // Venator's Mark
  'bestiary-effects:2tOVDTjCZVx4uEjP': 'HARMFUL', // Skin Net
  'bestiary-effects:3bAtqn2WPSqxCYPY': 'HARMFUL', // Hampering Fusillade
  'bestiary-effects:3MIZf42EhhKbIwLQ': 'HARMFUL', // Aura of Corruption
  'bestiary-effects:3oF2DVXCmJ7VloBb': 'HARMFUL', // Aura of Disquietude
  'bestiary-effects:4FginnDcOt4wfedf': 'HARMFUL', // Bittersweet Dreams
  'bestiary-effects:4fmRhCljZ9l0Tr3J': 'HARMFUL', // Enliven Foliage
  'bestiary-effects:4q8Of8NM9DC8kWyK': 'HARMFUL', // Tooth Tug
  'bestiary-effects:4X4wCxkxr9rJdoT1': 'HARMFUL', // Vomit Tar
  'bestiary-effects:5roCV7EbPx1G5xOd': 'HARMFUL', // Mangling Rend
  'bestiary-effects:5Todv39Zj63IyQCZ': 'HARMFUL', // Conductive Downpour
  'bestiary-effects:5ZK22sNW7o26aST0': 'HARMFUL', // Dirty Bomb
  'bestiary-effects:6E8blr21VWk0L4sv': 'HARMFUL', // Burned Fingers
  'bestiary-effects:6fPk2jOEp7LOsV7J': 'HARMFUL', // Venomous Aura
  'bestiary-effects:6OpwHz0f55wPawHI': 'HARMFUL', // Powder Burst
  'bestiary-effects:6rnB7nK6J6zF4vea': 'HARMFUL', // Graveknight's Curse
  'bestiary-effects:75B7z49jfQbWcSy9': 'HARMFUL', // Spray Toxic Oil
  'bestiary-effects:7fTxNaznBfjrGTjt': 'HARMFUL', // Radiate Cold
  'bestiary-effects:7LWZ6BwPIxr1uQm5': 'HARMFUL', // Graceless Domain
  'bestiary-effects:7OJrBAEah6YFLzcK': 'HARMFUL', // Crush Chitin
  'bestiary-effects:7PYhxmQxCD5kzMlw': 'HARMFUL', // Harrowing Misfortune
  'bestiary-effects:7qoZauizAKfPIXeu': 'HARMFUL', // Volcanic Purge

  // Beneficial: the effect only grants a bonus, protection, resistance or other advantage.
  'bestiary-effects:0jAT2TJoqC1z6NCf': 'BENEFICIAL', // Consume Memories
  'bestiary-effects:0jo8CUzw5lWehNg3': 'BENEFICIAL', // Oceanic Armor
  'bestiary-effects:1dwMVgBHfT4qO4OS': 'BENEFICIAL', // Resonance
  'bestiary-effects:1jrrnMwsfO97LXi4': 'BENEFICIAL', // Absorb Memories
  'bestiary-effects:1zwFkM7KSsuMrAD3': 'BENEFICIAL', // Stay Strong!
  'bestiary-effects:2DlOfFoYLGSlfugH': 'BENEFICIAL', // Manipulate Luck (Good)
  'bestiary-effects:361dIAAhiZE0wg8v': 'BENEFICIAL', // Adaptive Strike
  'bestiary-effects:37wbBpPBi5eBtNqM': 'BENEFICIAL', // Lantern of Hope
  'bestiary-effects:3HaT8gBo8krdVniF': 'BENEFICIAL', // Near-Death Experience
  'bestiary-effects:4bR1i7qzmSJ5No6O': 'BENEFICIAL', // Bond in Light
  'bestiary-effects:4FMFRlEC923CnLI7': 'BENEFICIAL', // Fed by Wood
  'bestiary-effects:4GAJHkurmZ1ttKDv': 'BENEFICIAL', // Blood Magic
  'bestiary-effects:4M2K16mH4gndHAKa': 'BENEFICIAL', // Undead Mastery
  'bestiary-effects:4tGVIEqwH4TQoF0O': 'BENEFICIAL', // Bastion Aura
  'bestiary-effects:513Y2ZSzvm8rijkp': 'BENEFICIAL', // Fold Form
  'bestiary-effects:57gVKu4lxbGhBpQf': 'BENEFICIAL', // Guard's Parry (Liege)
  'bestiary-effects:5M3RGpOuxizPM5Iy': 'BENEFICIAL', // Caustic Drool
  'bestiary-effects:5NSWRxAsJuvwyl0E': 'BENEFICIAL', // Commander's Aura
  'bestiary-effects:5syHrFGAE6lo0FUr': 'BENEFICIAL', // Invigorating Passion
  'bestiary-effects:64wrP9IbfHbj1mrA': 'BENEFICIAL', // War Leader
  'bestiary-effects:6bGS19fnwbv4E7mn': 'BENEFICIAL', // Diabolic Certitude
  'bestiary-effects:6GC248hHu3LdOAtS': 'BENEFICIAL', // Sting of the Lash
  'bestiary-effects:78Dfh5ghvULGiyzk': 'BENEFICIAL', // Reactive Detach
  'bestiary-effects:7EBdAHY7y06Bk4un': 'BENEFICIAL', // Drain Life (Wight Spell Sniper)
  'bestiary-effects:7PjBr9LsVB0Jjzyu': 'BENEFICIAL', // Interpose
  'bestiary-effects:7x0O2GqWBJiAk5PF': 'BENEFICIAL', // Brutal Rally

  // Neutral by explicit review: the same definition can benefit or harm depending on target/outcome.
  'bestiary-effects:1toVzNVJZx0RwG1v': 'NEUTRAL', // Darivan's Bloodline Magic
  'bestiary-effects:5w675gmnZqbND0mt': 'NEUTRAL', // Flesh Mutation
  'bestiary-effects:6E8bOkwFzFuQ3ZAw': 'NEUTRAL', // Lurker's Glow (Critical Failure): illumination is contextual
} satisfies Record<string, Pathfinder2eEditorialEffectPolarity>)
