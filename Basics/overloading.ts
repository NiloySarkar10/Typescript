
type NumString = number | string;

function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: number, b: string): string;
function sum(a: string, b: number): string;
function sum(a: NumString, b: NumString) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}