import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import * as Monster from "../../monster";

import "../css/create_monster.css"


const types = Array.from(Monster.MonsterTypeNames.values()).map(v => ({label: v, value: v}))

const validateForm = (event: React.FormEvent) => {
	//console.log("Hello!")
	event.preventDefault();
}

interface IMonsterTypeDropdownProps {
	type: Monster.MonsterType,
	onChange: (newType: Monster.MonsterType) => void
}

const MonsterTypeDropdown = (props: IMonsterTypeDropdownProps) => (
	<TextField id="type" select value={Monster.MonsterTypeNames.get(props.type)} label="Type" helperText="" margin="normal" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
		let val = Array.from(Monster.MonsterTypeNames.entries()).find((v) => v[1] === event.target.value)
		if (val !== undefined)
			props.onChange(val[0])
		}}>
		{types.map(option => (
			<MenuItem key={option.value} value={option.value} selected={Monster.MonsterTypeNames.get(props.type) === option.value}>
				{option.label}
			</MenuItem>
		))}
	</TextField>
)

interface IMonsterCreationState {
	monster: Monster.IMonster
}

export class MonsterCreation extends React.Component<{}, IMonsterCreationState> {
	constructor(props: {}) {
		super(props)
		this.state = {
			monster: {
				name: "",
				type: Monster.MonsterType.Aberration,
				size: Monster.MonsterSize.Medium,
				environment: Monster.MonsterEnvironment.Arctic,
				resistance: "",
				damageImmunity: "",
				conditionImmunity: "",
				vulnerability: "",
				armorClass: 13,
				hitPoints: 150,
				hitPointDice: 2,
				hitPointDiceAdd: 3,
				speedLand: 30,
				speedSwim: 30,
				strStat: 10,
				dexStat: 10,
				conStat: 10,
				intStat: 10,
				wisStat: 10,
				chaStat: 10,
				strSavingThrow: 2,
				dexSavingThrow: 2,
				conSavingThrow: 2,
				intSavingThrow: 2,
				wisSavingThrow: 2,
				chaSavingThrow: 2,
				skillsAthletics: 0,
				skillsAcrobatics: 0,
				skillsSleightOfHand: 0,
				skillsStealth: 0,
				skillsArcana: 0,
				skillsHistory: 0,
				skillsInvestigation: 0,
				skillsNature: 0,
				skillsReligion: 0,
				skillsAnimalHandling: 0,
				skillsInsight: 0,
				skillsMedicine: 0,
				skillsPerception: 0,
				skillsSurvival: 0,
				skillsDeception: 0,
				skillsIntimidation: 0,
				skillsPerformance: 0,
				skillsCharisma: 0,
				sensesBlindsight: 0,
				sensesDarkvision: 60,
				sensesTremorsense: 0,
				sensesTruesight: 0,
				sensesPassivePerception: 15,
				sensesPassiveInvestigation: 15,
				sensesPassiveInsight: 15,
				languages: "Common",
				challengeRating: 0.5,
				experiencePoints: 200,
				abilities: [],
				actions: [],
			}
		}
	}

	handleMonsterNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const monster = this.state.monster
		this.setState({
			monster: { ...monster, name: event.target.value }
		})
	}

	handleMonsterTypeChange = (newType: Monster.MonsterType) => {
		const monster = this.state.monster
		const newMonster = { ...monster, type: newType }
		this.setState({
			monster: newMonster
		})
	}

	render() {
		return (
			<div className="monster-creation-container">
				<form onSubmit={validateForm}>
					<h1 className="page-title">Create a Monster</h1>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<div className="form-group">
								<TextField autoFocus margin="dense" value={this.state.monster.name} id="name" label="Monster Name" helperText="" fullWidth required onChange={this.handleMonsterNameChange}/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<MonsterTypeDropdown type={this.state.monster.type} onChange={this.handleMonsterTypeChange} />
						</Grid>
						<Grid item xs={6}>
							<div>Size</div>
						</Grid>
						<Grid item xs={6}>
							<div>Alignment</div>
						</Grid>
						<Grid item xs={6}>
							<div>Environment</div>
						</Grid>
						<Grid item xs={12}>
							<div>Resistance</div>
						</Grid>
						<Grid item xs={12}>
							<div>Damage Immunity</div>
						</Grid>
						<Grid item xs={12}>
							<div>Condition Immunity</div>
						</Grid>
						<Grid item xs={12}>
							<div>Vulnerability</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
						<Grid item xs={6}>
							<div>Hi</div>
						</Grid>
					</Grid>
					<div className="form-group">
						<TextField autoFocus margin="dense" id="name" label="Email Address" helperText="Test" fullWidth required/>
					</div>
					<FormControl fullWidth>
						<InputLabel htmlFor="adornment-amount">Amount</InputLabel>
						<Input
							id="adornment-amount"
							endAdornment={<InputAdornment position="end">$</InputAdornment>}
						/>
					</FormControl>
					<TextField
			  id="standard-number"
			  label="Number"
			  type="number"
			  InputLabelProps={{
				shrink: true,
			  }}
			  margin="normal"
			/>
					<Button className="button" variant="contained" color="primary" type="submit"> Create Monster </Button>
				</form>
			</div>
		);
	}
}


/*
Form Notes: 
Type: (Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, Undead)
Size: (Tiny, Small, Medium, Large, Huge, Gargantuan)
Alignment: (Freeform Text)
Environment: (Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Underwater, Urban)
Resistance: (Freeform Text)
Damage Immunity: (Freeform Text)
Condition Immunity: (Freeform Text)
Vulnerability: (Freeform Text)
Armor Class: 0+
Hit Points (Averaged Out): 0+
Hit Points (Die Roll): xdy + z
Speed (Land): 0+ ft
Speed (Swim): 0+ ft
Str Stat: 0+
Dex Stat: 0+
Con Stat: 0+
Int Stat:  0+
Wis Stat: 0+
Cha Stat:0+
Saving Throws — Str: int
Saving Throws — Dex: int
Saving Throws — Con: int
Saving Throws — Int: int
Saving Throws — Wis: int
Saving Throws — Cha: int
Skills:
— Strength (Athletics): int
— Dexterity (Acrobatics): int
— Dexterity (Sleight of Hands): int
— Dexterity (Stealth): int
— Intelligence (Arcana): int
— Intelligence (History): int
— Intelligence (Investigation): int
— Intelligence (Nature): int
— Intelligence (Religion): int
— Wisdom (Animal Handling): int
— Wisdom (Insight): int
— Wisdom (Medicine): int
— Wisdom (Perception): int
— Wisdom (Survival): int
— Charisma (Deception): int
— Charisma (Intimidation): int
— Charisma (Performance): int
— Charisma (Persuasion): int
Senses:
— Blindsight: 0+ft
— Darkvision: 0+ft
— Tremorsense: 0+ft
— Truesight: 0+ft
— Passive Wis (Perception):  int
— Passive Int (Investigation): int
— Passive Wis (Insight): int
Languages:
Challenge: 0.0+ (float)
XP: 0+
Abilities:
— Name: text
— Description: text
Actions:
— Name: text
— Description: text
— Usage Counters: 0+
— (Optional) Type of Attack: Melee / Ranged / N/A
— (Optional) To Hit: int
— (Optional) Reach: int ft
— (Optional) Target(s): 0+
— (Optional) Averaged Damage: 0+
— (Optional) xdy + z damage

*/