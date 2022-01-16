declare namespace Models {
    export interface Match {
        homeTeam: string;
        awayTeam: string;
        leagueName: string;
        kickoff: string;
        homeTeamPosition?: string | undefined;
        awayTeam?: string | undefinded;
        homeTeamScore: string; 
        awayTeam: string;
        dateAndTime: string;

    }

    export interface MatchProgram {
        matches: Array<Match>;
        round: number;
    }
}