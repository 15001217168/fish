/**
 * the command
 */
exports = module.exports = class Command {
    constructor(root) {
        this._root = root;
    }
    get aggregateRoot() {
        return this._root;
    }
    set aggregateRoot(v) {
        this._root = v;
    }
}