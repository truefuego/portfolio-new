export const getPercentage = (num: number, percentage: number) => {
    if (percentage < 0 || percentage > 100) {
        throw new Error("Percentage must be between 0 and 100");
    }
    return (num * percentage) / 100;
};

export const isArrayEmpty = <T>(data: T[]): boolean => {
    return data.length === 0;
};
