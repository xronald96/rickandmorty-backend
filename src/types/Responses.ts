import { Character, Characters } from "./CharacterEntity";
import { Episode, Episodes } from "./EpisodeEntity";
import { LocationEntity, Locations } from "./LocationEntity";

import { UserEntity } from "./UserEntity";

export interface SuccessResponse {
    status: number,
    response: UserEntity | Character | Characters | Episode | Episodes | LocationEntity | Locations
}

export interface ErrorResponse {
    status: number,
    error: {
        message: string,
        error?: unknown
    }
}