class Sorter {

    constructor() {
        this.data = [];
        this.comparator = this.compareNum;
    }

    add(element) {
        this.data.push(element);
    }

    at(index) {
        return this.data[index];
    }

    get length() {
        return this.data.length;
    }

    toArray() {
        return this.data;
    }

    sort(indices) {
        let arrayData = [];
        for (let i = 0; i < indices.length; i++) {
            arrayData.push(this.data[indices[i]]);
        }
        indices.sort(this.compareNum);
        arrayData.sort(this.comparator);
        for (let i = 0; i < indices.length; i++) {
            this.data[indices[i]] = arrayData[i];
        }
    }

    compareNum(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;