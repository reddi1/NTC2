onEvent('recipes', event => {

    event.recipes.custommachinery.custom_machine("custommachinery:assembler", 100)
        .requireFluid(Fluid.of("kubejs:liquid_refined_glue", 100), "input5")
        .requireItem(Item.of("industrialforegoing:plastic", 1), "input1")
        .requireItem(Item.of("emendatusenigmatica:copper_plate", 1), "input2")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:basic_circuit_board", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:assembler", 100)
        .requireFluid(Fluid.of("kubejs:liquid_refined_glue", 100), "input5")
        .requireItem(Item.of("immersiveengineering:wire_copper", 4), "input1")
        .requireItem(Item.of("emendatusenigmatica:coal_dust", 2), "input2")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:basic_smd", 4), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:assembler", 100)
        .requireFluid(Fluid.of("tconstruct:molten_tin", 100), "input5")
        .requireItem(Item.of("kubejs:printed_basic_circuit_board", 1), "input1")
        .requireItem(Item.of("kubejs:basic_smd", 2), "input2")
        .requireItem(Item.of("kubejs:transistor", 2), "input3")
        .requireItem(Item.of("immersiveengineering:wirecoil_redstone", 2), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:printed_final_basic_circuit_board", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:assembler", 100)
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input5")
        .requireItem(Item.of("kubejs:basic_circuit_board", 1), "input1")
        .requireItem(Item.of("immersiveengineering:wire_copper", 1), "input2")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:printed_basic_circuit_board", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:assembler", 100)
        .requireFluid(Fluid.of("kubejs:liquid_refined_glue", 50), "input5")
        .requireItem(Item.of("immersiveengineering:wire_copper", 3), "input1")
        .requireItem(Item.of("emendatusenigmatica:tin_plate", 1), "input2")
        .requireItem(Item.of("extendedcrafting:redstone_ingot", 1), "input3")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:transistor", 3), "output1")

    //slice_n_splice
    event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 600)
        .requireItem(Item.of("betterendforge:eternal_crystal", 4), "input")
        .requireItem(Item.of("tconstruct:enderman_head", 1), "input2")
        .requireItem(Item.of("emendatusenigmatica:enderium_ingot", 4), "input3")
        .requireItem(Item.of("tconstruct:soulsteel_ingot", 2), "input4")
        .requireEnergyPerTick(200)
        .produceItem(Item.of("enderioalloys:item_material_skull_ender_resonator", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 600)
        .requireItem(Item.of("tconstruct:drowned_head", 1), "input")
        .requireItem(Item.of("enderioalloys:item_material_skull_zombie_electrode", 1), "input2")
        .requireItem(Item.of("tconstruct:husk_head", 1), "input3")
        .requireItem(Item.of("tconstruct:soulsteel_ingot", 2), "input4")
        .requireEnergyPerTick(200)
        .produceItem(Item.of("enderioalloys:item_material_skull_zombie_controller", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 600)
        .requireItem(Item.of("immersiveengineering:graphite_electrode", 4), "input")
        .requireItem(Item.of("minecraft:zombie_head", 1), "input2")
        .requireItem(Item.of("thermal:lightning_charge", 4), "input3")
        .requireItem(Item.of("emendatusenigmatica:electrum_ingot", 2), "input4")
        .requireEnergyPerTick(200)
        .produceItem(Item.of("enderioalloys:item_material_skull_zombie_electrode", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 600)
        .requireItem(Item.of("enderioalloys:item_material_vibrant_crystal", 4), "input")
        .requireItem(Item.of("tconstruct:enderman_head", 4), "input2")
        .requireEnergyPerTick(200)
        .produceItem(Item.of("enderioalloys:item_material_ender_crystal", 1), "output1")

    /* -=-=-=-=-=-=-=-=- 6,7,8x Ore Processing -=-=-=-=-=-=-=-=- */

    /* -=-=-=-=-=-=-=-=- aromatic acrobatics -=-=-=-=-=-=-=-=- */

    //fluid centrifuge
    event.recipes.custommachinery.custom_machine("custommachinery:fluid_centrifuge", 100)
        .requireFluid(Fluid.of("thermal:heavy_oil", 1000), "input1")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_benzene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_toluene", 250), "output2")
        .produceFluid(Fluid.of("kubejs:liquid_xylene", 250), "output3")
        .produceFluid(Fluid.of("kubejs:liquid_ethylbenzene", 250), "output4")

    event.recipes.custommachinery.custom_machine("custommachinery:fluid_centrifuge", 100)
        .requireFluid(Fluid.of("immersivepetroleum:oil", 1000), "input1")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_benzene", 166), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_toluene", 166), "output2")
        .produceFluid(Fluid.of("kubejs:liquid_xylene", 166), "output3")
        .produceFluid(Fluid.of("kubejs:liquid_ethylbenzene", 166), "output4")
        .produceFluid(Fluid.of("thermal:light_oil", 166), "output5")
        .produceFluid(Fluid.of("thermal:heavy_oil", 166), "output6")

    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_toluene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:hydrogen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_benzene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_methane", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_xylene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:hydrogen", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_benzene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_methane", 500), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_ethylbenzene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:hydrogen", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_benzene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_methane", 500), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_toluene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_phenol", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_carbonated_water", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_benzene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:ethene", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_ethylbenzene", 250), "output1")

    /* -=-=-=-=-=-=-=-=- 6 times materials -=-=-=-=-=-=-=-=- */

    //chemical mixer
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("kubejs:liquid_acetone", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_benzene", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_ab_mixture", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("kubejs:liquid_ab_mixture", 200), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_turpentine", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_dip", 300), "output1")

    //activated carbon done via induction_smelter.js

    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_methanol", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_carbon_monoxide", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_vinegar", 500), "output1")

    /* -=-=-=-=-=-=-=-=- 7 times materials -=-=-=-=-=-=-=-=- */

    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:hydrofluoric_acid", 250), "input1")
        .requireFluid(Fluid.of("mekanism:sulfur_trioxide", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 500), "output1")

    //chemical mixer
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("kubejs:liquid_ddt", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_mustard_gas", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_secret_spices", 500), "output1")

    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("emendatusenigmatica:molten_sulfur", 576), "input1")
        .requireFluid(Fluid.of("mekanism:chlorine", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_sulfur_dichloride", 500), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("emendatusenigmatica:molten_sulfur", 576), "input1")
        .requireFluid(Fluid.of("mekanism:ethene", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_mustard_gas", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:ethene", 500), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_acetylaldehyde", 500), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_acetylaldehyde", 250), "input1")
        .requireFluid(Fluid.of("mekanism:chlorine", 750), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_chloral", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 375), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_chloral", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_chlorobenzene", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_ddt", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:chlorine", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_benzene", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_chlorobenzene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 125), "output2")

    /* -=-=-=-=-=-=-=-=- 8 times materials -=-=-=-=-=-=-=-=- */
    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 300), "input1")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "output1")

    //carbonic acid handled by thermal.zs

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbon_dioxide", 250), "input1")
        .requireFluid(Fluid.of("minecraft:water", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_carbonated_water", 250), "output1")

    //fluid centrifuge
    event.recipes.custommachinery.custom_machine("custommachinery:fluid_centrifuge", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonated_water", 500), "input1")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_carbon_dioxide", 250), "output1")
        .produceFluid(Fluid.of("minecraft:water", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_dichloroethane", 250), "input1")
        .requireFluid(Fluid.of("mekanism:chlorine", 750), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_perchloroethylene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 500), "output2")

    //chemical mixer
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aspirin", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_acetaminophen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_painkiller_mix", 500), "output2")

    //chemical reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_acetic_anhydride", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_salicylic_acid", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_aspirin", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_vinegar", 250), "output2")

    //chemical reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_methyl_acetate", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_carbon_monoxide", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_acetic_anhydride", 250), "output2")

    //chemical reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_methanol", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_vinegar", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_methyl_acetate", 250), "output1")
        .produceFluid(Fluid.of("minecraft:water", 250), "output2")

    //chemical reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_sodium_salicylate", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_salicylic_acid", 250), "output1")
        .produceFluid(Fluid.of("mekanism:sodium", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_sodium_phenolate", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_carbon_monoxide", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_sodium_salicylate", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_phenol", 250), "input1")
        .requireFluid(Fluid.of("mekanism:sodium", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_sodium_phenolate", 250), "output1")
        .produceFluid(Fluid.of("mekanism:hydrogen", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_chlorobenzene", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_sodium_hydroxide", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_phenol", 250), "output1")
        .produceFluid(Fluid.of("mekanism:sodium", 250), "output2")

    //chemical reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_phenol", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_acetic_anhydride", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_hydroxybenzoic_acid", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_vinegar", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_hydroxybenzoic_acid", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydroxylamine", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_hydroxybenzaldehyde_oxime", 250), "output1")
        .produceFluid(Fluid.of("minecraft:water", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_hydroxybenzaldehyde_oxime", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_thionyl_chloride", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_acetaminophen", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_thionyl_chloride", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:sulfur_trioxide", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_sulfur_dichloride", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_thionyl_chloride", 250), "output1")
        .produceFluid(Fluid.of("mekanism:sulfur_dioxide", 250), "output2")

    //Accelerator
    event.recipes.custommachinery.custom_machine("custommachinery:accelerator", 100)
        .requireFluid(Fluid.of("mekanism:hydrogen", 250), "input1")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_proton", 250), "output1")

    //liquid proton to proton gas via condenser in rotary.js

    //Collision Chamber
    event.recipes.custommachinery.custom_machine("custommachinery:collision_chamber", 100)
        .requireFluid(Fluid.of("kubejs:liquid_proton", 300), "input1")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_positron", 100), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_electron_neutrino", 100), "output2")
        .produceFluid(Fluid.of("mekanismgenerators:deuterium", 100), "output3")

    event.recipes.custommachinery.custom_machine("custommachinery:collision_chamber", 100)
        .requireFluid(Fluid.of("kubejs:liquid_positron", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_electron_neutrino", 250), "input1")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_tau", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:collision_chamber", 100)
        .requireFluid(Fluid.of("kubejs:liquid_proton", 250), "input1")
        .requireFluid(Fluid.of("tconstruct:molten_lead", 144), "input2")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_proton", 50), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_anti_proton", 50), "output2")
        .produceFluid(Fluid.of("tconstruct:molten_lead", 16), "output3")

    event.recipes.custommachinery.custom_machine("custommachinery:collision_chamber", 100)
        .requireFluid(Fluid.of("kubejs:liquid_positron", 125), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_anti_proton", 125), "input2")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_anti_hydrogen", 250), "output1")

    // Mass Fabricator
    event.recipes.custommachinery.custom_machine("custommachinery:mekanism_matter/mass_fabricator", 20)
        .requireItem(Item.of("appliedenergistics2:singularity", 1), "input1")
        .requireEnergyPerTick(50000)
        .produceItem(Item.of("kubejs:uu_matter_2", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:mekanism_matter/mass_fabricator", 100)
        .requireItem(Item.of("appliedenergistics2:matter_ball", 1), "input1")
        .requireEnergyPerTick(150000)
        .produceItem(Item.of("kubejs:uu_matter_2", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:mekanism_matter/mass_fabricator", 400)
        .requireEnergyPerTick(200000)
        .produceItem(Item.of("kubejs:uu_matter_2", 1), "output1")

    // Antimatter Synthesizer
    event.recipes.custommachinery.custom_machine("custommachinery:mekanism_matter/antimatter_synthesizer", 100)
        .requireItem(Item.of("mekanism:pellet_antimatter", 1), "input1")
        .requireEnergyPerTick(50000)
        .produceFluid(Fluid.of("kubejs:liquid_universal_mass", 1000), "output1")


    /* -=-=-=-=-=-=-=-=- prereqs added -=-=-=-=-=-=-=-=- */
    //Chemical Reactor
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:molten_sugar", 72), "input1")
        .requireFluid(Fluid.of("minecraft:water", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("immersiveengineering:ethanol", 2000), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_carbon_dioxide", 2000), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbon_dioxide", 250), "input1")
        .requireFluid(Fluid.of("mekanism:hydrogen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("minecraft:water", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_carbon_monoxide", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbon_monoxide", 250), "input1")
        .requireFluid(Fluid.of("mekanism:hydrogen", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_methanol", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitrogen", 1000), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 1000), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_nitric_oxide", 2000), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_oxide", 2000), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 1000), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_nitric_dioxide", 2000), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_dioxide", 3000), "input1")
        .requireFluid(Fluid.of("minecraft:water", 1000), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_nitric_acid", 2000), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:hydrogen", 1000), "input1")
        .requireFluid(Fluid.of("mekanism:chlorine", 1000), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 2000), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("emendatusenigmatica:molten_sulfur", 144), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 500), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:sulfur_dioxide", 500), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:sulfur_dioxide", 500), "input1")
        .requireFluid(Fluid.of("mekanism:oxygen", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:sulfur_trioxide", 500), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:sulfur_trioxide", 250), "input1")
        .requireFluid(Fluid.of("minecraft:water", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:sulfuric_acid", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:ethene", 250), "input1")
        .requireFluid(Fluid.of("mekanism:chlorine", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_dichloroethane", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_chloroethane", 1000), "input1")
        .requireFluid(Fluid.of("tconstruct:molten_lead", 144), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_tetraethyllead", 250), "output1")
        .produceFluid(Fluid.of("mekanism:chlorine", 250), "output2")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("mekanism:ethene", 250), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_chloroethane", 250), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("immersiveengineering:ethanol", 250), "input1")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:ethene", 250), "output1")
        .produceFluid(Fluid.of("kubejs:liquid_diluted_sulfuric_acid", 500), "output2")

    //chemical mixer
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 250), "input1")
        .requireFluid(Fluid.of("minecraft:water", 250), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:liquid_diluted_sulfuric_acid", 500), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("kubejs:liquid_tetraethyllead", 60), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_dichloroethane", 40), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:ethene", 100), "output1")

    //fluid centrifuge
    event.recipes.custommachinery.custom_machine("custommachinery:fluid_centrifuge", 100)
        .requireFluid(Fluid.of("kubejs:liquid_diluted_sulfuric_acid", 500), "input1")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("mekanism:sulfuric_acid", 250), "output1")
        .produceFluid(Fluid.of("minecraft:water", 250), "output2")

    //actual processing

    /* -=-=-=-=-=-=-=-=- 8 times materials -=-=-=-=-=-=-=-=- */

    //ore + anti-hydrogen to disintegrated metal done in dissolution.js

    //disintegrated
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_aluminum", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_aluminum", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_cobalt", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_cobalt", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_copper", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_copper", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_gold", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_gold", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_iron", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_iron", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_lead", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_lead", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_nickel", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_nickel", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_osmium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_osmium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_silver", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_silver", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_thallasium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_thallasium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_tin", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_tin", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_uranium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_uranium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_aqua_regia", 100), "input1")
        .requireFluid(Fluid.of("kubejs:disintegrated_zinc", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:royal_zinc", 200), "output1")

    //royal
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_aluminum", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_aluminum", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_cobalt", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_cobalt", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_copper", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_copper", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_gold", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_gold", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_iron", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_iron", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_lead", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_lead", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_nickel", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_nickel", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_osmium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_osmium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_silver", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_silver", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_thallasium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_thallasium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_tin", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_tin", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_uranium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_uranium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_painkiller_mix", 100), "input1")
        .requireFluid(Fluid.of("kubejs:royal_zinc", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:pain_free_zinc", 200), "output1")


    //pain-free
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_aluminum", 100), "input2")

        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_aluminum", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_cobalt", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_cobalt", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_copper", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_copper", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_gold", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_gold", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_iron", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_iron", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_lead", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_lead", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_nickel", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_nickel", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_osmium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_osmium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_silver", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_silver", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_thallasium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_thallasium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_tin", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_tin", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_uranium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_uranium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_carbonic_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:pain_free_zinc", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:bubbly_zinc", 200), "output1")

    //using injecting.js from mek as irradiator

    //lots of stuff handled by mek js and thermal zs

    /* -=-=-=-=-=-=-=-=- 7 times materials -=-=-=-=-=-=-=-=- */

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_aluminum", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_aluminum", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_cobalt", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_cobalt", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_copper", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_copper", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_gold", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_gold", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_iron", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_iron", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_lead", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_lead", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_nickel", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_nickel", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_osmium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_osmium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_silver", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_silver", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_thallasium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_thallasium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_tin", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_tin", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_uranium", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_uranium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_reactor", 100)
        .requireFluid(Fluid.of("kubejs:liquid_fluorosulfuric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:spicy_zinc", 100), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:treated_zinc", 200), "output1")

    //chemical mixer
    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_aluminum", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_aluminum", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_cobalt", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_cobalt", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_copper", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_copper", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_gold", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_gold", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_iron", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_iron", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_lead", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_lead", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_nickel", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_nickel", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_osmium", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_osmium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_silver", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_silver", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_thallasium", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_thallasium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_tin", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_tin", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_uranium", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_uranium", 200), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:chemical_mixer", 100)
        .requireFluid(Fluid.of("mekanism:steam", 200), "input1")
        .requireFluid(Fluid.of("kubejs:treated_zinc", 200), "input2")
        .requireEnergy(5000)
        .produceFluid(Fluid.of("kubejs:steamed_zinc", 200), "output1")

    /* -=-=-=-=-=-=-=-=- 6 times materials -=-=-=-=-=-=-=-=- */

    //ore leacher
    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_aluminum", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_aluminum", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_cobalt", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_cobalt", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_copper", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_copper", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_gold", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_gold", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_iron", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_iron", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_lead", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_lead", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_nickel", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_nickel", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_osmium", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_osmium", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_silver", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_silver", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_thallasium", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_thallasium", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_tin", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_tin", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_uranium", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_uranium", 1), "output1")

    event.recipes.custommachinery.custom_machine("custommachinery:ore_leacher", 100)
        .requireFluid(Fluid.of("kubejs:liquid_nitric_acid", 100), "input1")
        .requireFluid(Fluid.of("kubejs:liquid_hydrochloric_acid", 100), "input2")
        .requireFluid(Fluid.of("mekanism:sulfuric_acid", 100), "input3")
        .requireItem(Item.of("kubejs:dirty_lump_zinc", 1), "input4")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clean_lump_zinc", 1), "output1")

    /* -=-=-=-=-=-=-=-=- nuclear stuff -=-=-=-=-=-=-=-=- */

    // thorium ingot to clumps
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("chemlib:ingot_thorium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_thorium", 5), "output1")

    // thorium clumps to 232 isotope
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("kubejs:clumps_thorium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:232_thorium", 2), "output1")

    // after fission, depleted tbu to clumps of uranium (233)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:tbu_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_uranium", 5), "output1")
        .produceItem(Item.of("kubejs:clumps_thorium", 3), "output2")

    // uranium ingot to uranium 238
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("emendatusenigmatica:uranium_ingot", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_uranium", 5), "output1")

    // uranium clumps to 238 isotope
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("kubejs:clumps_uranium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:238_uranium", 2), "output1")
        .produceItem(Item.of("kubejs:235_uranium", 1), "output2")

    // after fission, depleted uranium to clumps of plut (242)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:233_leu_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_plutonium", 5), "output1")

    // after fission, depleted uranium to clumps of plut (241)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:235_leu_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:241_plutonium", 5), "output1")
        .produceItem(Item.of("kubejs:238_uranium", 3), "output2")
        .produceItem(Item.of("kubejs:239_plutonium", 1), "output3")

    // plut ingot to plut 242
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("chemlib:ingot_plutonium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_plutonium", 5), "output1")

    // plut clumps to 242 isotope
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("kubejs:clumps_plutonium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:242_plutonium", 2), "output1")
        .produceItem(Item.of("kubejs:239_plutonium", 1), "output2")

    // after fission, depleted plut to clumps of curium (247)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:241_hep_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_curium", 5), "output1")

    // after fission, depleted mox to clumps of curium (246)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:241_mox_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:246_curium", 5), "output1")

    // after fission, depleted mox to clumps of curium (243)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:239_mox_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:243_curium", 5), "output1")

    // after fission, depleted lecm to clumps of cali (252)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:247_lecm_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:252_californium", 5), "output1")

    // after fission, depleted lecm to clumps of cali (249)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:243_lecm_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:249_californium", 5), "output1")

    // after fission, depleted hecf to clumps of cali (250)
    event.recipes.custommachinery.custom_machine("custommachinery:fuel_reprocessor", 100)
        .requireItem(Item.of("kubejs:249_hecf_depleted", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:250_californium", 5), "output1")

    // curium ingot to curium 247
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("chemlib:ingot_curium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_curium", 5), "output1")

    // curium clumps to 247 isotope
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("kubejs:clumps_curium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:247_curium", 2), "output1")
        .produceItem(Item.of("kubejs:243_curium", 1), "output2")

    // cali ingot to cali 252
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("chemlib:ingot_californium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:clumps_californium", 5), "output1")

    // californium clumps to 252 isotope
    event.recipes.custommachinery.custom_machine("custommachinery:isotope_separator", 100)
        .requireItem(Item.of("kubejs:clumps_californium", 1), "input1")
        .requireEnergy(5000)
        .produceItem(Item.of("kubejs:252_californium", 2), "output1")
})