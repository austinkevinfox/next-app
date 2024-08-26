export interface Piece {
    code: string;
    name: "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
    color: "white" | "black";
}

export interface BoardPosition {
    algebraicNotation: string;
    piece: Piece | null;
}