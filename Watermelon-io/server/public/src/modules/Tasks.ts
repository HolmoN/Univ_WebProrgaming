export class Tasks{
    static sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))
}

