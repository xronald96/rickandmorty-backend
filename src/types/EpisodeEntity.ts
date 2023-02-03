export type Status = 'alive' | 'dead' | 'unknown'
export type Gender = 'female' | 'male' | 'genderless' | 'unknown'
export  type FilterEpisode = {
	page: string;
	name: string;
	status: Status;
	species: string;
	type: string;
	gender: Gender;
}
export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

export interface Episode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: Date;
}

export interface Episodes {
	info: Info;
	results: Episode[];
}
