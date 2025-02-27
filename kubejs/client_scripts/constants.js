//priority: 1010

// Used to determine which materials to unify
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'obsidian',
    'fluix',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'potassium_nitrate',
    'apatite',
    'redstone',
    'glowstone',
    'certus_quartz',
    'charged_certus_quartz',
    'dimensional',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
    'thallasium',
    'bitumen',
    'coal',
    'terminite',
    'aeternium',
    'coal_coke'
];


const itemsToHide = [

    'emendatusenigmatica:sulfur_ore',
    'emendatusenigmatica:cinnabar_ore',
    'emendatusenigmatica:dimensional_crushed',
    'emendatusenigmatica:arcane_crushed',
    'emendatusenigmatica:potassium_nitrate_crushed',
    'emendatusenigmatica:sulfur_crushed',
    'emendatusenigmatica:apatite_crushed',
    'emendatusenigmatica:cinnabar_crushed',
    'emendatusenigmatica:bitumen_crushed',
    'emendatusenigmatica:fluorite_crushed',
    'emendatusenigmatica:certus_quartz_crushed',
    'emendatusenigmatica:ancient_debris_crushed',
    'emendatusenigmatica:quartz_crushed',
    'emendatusenigmatica:redstone_crushed',
    'emendatusenigmatica:lapis_crushed',
    'emendatusenigmatica:emerald_crushed',
    'emendatusenigmatica:diamond_crushed',
    'emendatusenigmatica:coal_crushed',
    'emendatusenigmatica:molten_zinc_bucket',
    'emendatusenigmatica:molten_uranium_bucket',
    'emendatusenigmatica:molten_tin_bucket',
    'emendatusenigmatica:molten_steel_bucket',
    'emendatusenigmatica:molten_silver_bucket',
    'emendatusenigmatica:molten_osmium_bucket',
    'emendatusenigmatica:molten_nickel_bucket',
    'emendatusenigmatica:molten_lead_bucket',
    'emendatusenigmatica:molten_iron_bucket',
    'emendatusenigmatica:molten_invar_bucket',
    'emendatusenigmatica:molten_gold_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:molten_emerald_bucket',
    'emendatusenigmatica:molten_electrum_bucket',
    'emendatusenigmatica:molten_diamond_bucket',
    'emendatusenigmatica:molten_copper_bucket',
    'emendatusenigmatica:molten_constantan_bucket',
    'emendatusenigmatica:molten_cobalt_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_bronze_bucket',
    'emendatusenigmatica:molten_brass_bucket',
    'emendatusenigmatica:molten_aluminum_bucket',
    'emendatusenigmatica:molten_ancient_debris_bucket',
    'emendatusenigmatica:molten_cloggrum_bucket',
    'emendatusenigmatica:molten_froststeel_bucket',
    'emendatusenigmatica:molten_utherium_bucket',
    'emendatusenigmatica:molten_regalium_bucket',
    'emendatusenigmatica:molten_iesnium_bucket',

    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',

    'mekanism:fluorite_gem',

    // 'quark:biotite',
    // 'quark:biotite_ore',
    'quark:tallow',

    'tconstruct:copper_ore',
    'tconstruct:cobalt_ore',
    'tconstruct:copper_ingot',
    'tconstruct:cobalt_ingot',

    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    // 'thermal:press_gear_die',
    // 'thermal:press_packing_3x3_die',
    // 'thermal:press_packing_2x2_die',
    // 'thermal:press_unpacking_die',
    'thermal:rubber',
    'thermal:niter',
    'thermal:cinnabar',
    'thermal:apatite',
    'thermal:sulfur',

    'quark:bonded_ravager_hide',
    'quark:ravager_hide',
    'quark:backpack',
    'quark:crate',
    'quark:magnet',
    'quark:soul_compass',

    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_deepslate_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /tconstruct:copper_(ore|block|nugget)/,
    /tconstruct:cobalt_(ore|block|nugget)/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /rftoolsbase:dimensionalshard_/,
    /theoneprobe:/,
    /upgrade_aquatic:\w+_jelly_torch/
];