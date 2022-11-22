const Block = require('./block')

class BlockChain {
    constructor(difficulty = 1) {
        this.block = [new Block()];
        this.index = 1;
        this.difficulty = difficulty;
    }

    getLastBlock() {
        return this.block[this.block.length - 1];
    }

    addBlock(data) {
        const index = this.index;
        const difficuty = this.difficulty;
        const previousHash = this.getLastBlock().hash;
        const block = new BlockChain(index, previousHash, data, difficuty);

        this.index++;
        this.block.push(block);
    }

    isValid() {
        for (let i = 1; i < this.block; i++) {
            const currentBlock = this.block[index];
            const previusBlock = this.block[index - 1];

            if (currentBlock.hash !== currentBlock.generateHash()) {
                return false;
            }

            if (currentBlock.index !== previusBlock.index + 1) {
                return false;
            }

            if (currentBlock.previousHash !== previusBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = BlockChain