/**
 * the aggregateroot
 */
exports = module.exports = class AggregateRoot
{
    constructor(aggregateRootId)
    {
        this._aggregateRootId = aggregateRootId;
    }
    get aggregateRootId() {
        return _aggregateRootId;
    }
    set aggregateRootId(v)
    {
        this._aggregateRootId = v;
    }
}
