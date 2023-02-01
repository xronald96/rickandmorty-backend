export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

export interface LocationEntity {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: Date;
}

export interface Locations {
	info: Info;
	results: LocationEntity[];
}
