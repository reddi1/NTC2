onEvent('recipes', e => {

  removeRecipeByID(e, [
    'immersiveengineering:crafting/treated_wood_horizontal'
  ])

  modifyShaped(e, 'immersiveengineering:treated_wood_horizontal', 8, ['DDD', 'DGD', 'DDD'], {
    G: 'immersiveengineering:creosote_bucket',
    D: '#minecraft:planks'
  })


  e.shaped(Item.of('betternether:cincinnasite_pickaxe_diamond', '{RepairCost:1,Damage:0}').enchant('minecraft:silk_touch', 1), [' C ', 'CSC', ' C '], {
    S: 'betternether:cincinnasite_pickaxe_diamond',
    C: 'tconstruct:silky_cloth'
  }).id(`kubejs:end_portal_breaker`)


  //mass fabricator
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:mekanism_matter/mass_fabricator"}'),
  ['ABA', 'CDC', 'ABA'], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:steel_casing',
    D: 'mekanism:antiprotonic_nucleosynthesizer'
  }).id(`ntc2:mass_fabricator`)

  //antimatter synthesizer
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:mekanism_matter/antimatter_synthesizer"}'),
  ['ACA', 'DBE', 'ACA'], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:steel_casing',
    D: 'mekanism:pellet_antimatter',
    E: 'kubejs:uu_matter_2'
  }).id(`ntc2:antimatter_synthesizer`)

  // uu matter
  e.shaped(Item.of('minecraft:bone', 32), ['A  ', 'AA ', 'A  '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_bones`)

  e.shaped(Item.of('minecraft:coal', 8), ['  A', 'A  ', '  A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_coal`)

  e.shaped(Ingredient.of('#forge:ingots/copper', 1), ['  A', 'A A', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_copper`)

  e.shaped(Ingredient.of('#forge:ores/emerald', 1), [' AA', 'A A', 'AA '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_emerald`)

  e.shaped(Item.of('minecraft:feather', 32), [' A ', ' A ', 'A A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_feather`)

  e.shaped(Item.of('minecraft:glass', 32), [' A ', 'A A', ' A '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_glass`)

  e.shaped(Item.of('minecraft:grass_block', 16), ['A  ', 'A  ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_grass_block`)

  e.shaped(Item.of('minecraft:ink_sac', 48), ['AA ', 'AA ', 'A  '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_ink_sac`)

  e.shaped(Item.of('minecraft:lapis_lazuli', 9), ['A  ', 'A  ', 'AA '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_lapis_lazuli`)

  e.shaped(Item.of('minecraft:lava_bucket', 1), ['BA ', 'AA ', '   '], {
    A: 'kubejs:uu_matter_2',
    B: 'minecraft:bucket'
  }).id(`kubejs:uu_matter_lava_bucket`)

  e.shaped(Item.of('minecraft:leather', 32), ['A A', ' A ', 'AAA'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_leather`)

  e.shaped(Item.of('minecraft:oak_log', 8), ['A  ', '   ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_oak_log`)

  e.shaped(Ingredient.of('#forge:ingots/osmium', 1), ['A A', '   ', 'A A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_osmium`)

  e.shaped(Item.of('minecraft:redstone', 24), [' A ', 'AAA', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_redstone`)

  e.shaped(Item.of('minecraft:snow_block', 16), ['A A', '   ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_snow_block`)

  e.shaped(Ingredient.of('#forge:ingots/steel', 1), ['AAA', ' A ', 'AAA'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_steel`)

  e.shaped(Ingredient.of('#forge:ingots/tin', 1), ['A A', '  A', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_tin`)

  e.shaped(Item.of('minecraft:water_bucket', 1), ['BA ', 'A  ', '   '], {
    A: 'kubejs:uu_matter_2',
    B: 'minecraft:bucket'
  }).id(`kubejs:uu_matter_water_bucket`)

  e.shaped(Item.of('minecraft:white_wool', 12), ['A A', '   ', ' A '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_white_wool`)

})
