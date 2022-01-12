declare namespace Models {
    export interface Match {
        homeTeam: string;
        awayTeam: string;
        leagueName: string;
        matchDate: string; //should probaly be made to a Date object, after MVP is done
        kickoff: string;
        homeTeamPosition?: string | undefined;
        awayTeam?: string | undefinded;
        homeTeamScore: string; 
        awayTeam: string;

    }

    export interface MatchProgram {
        matches: Array<Match>;
        round: number;
    }
}