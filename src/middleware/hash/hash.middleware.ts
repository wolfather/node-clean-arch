import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

export class Hash {
    constructor() {}

    private createSalt() : string {
        return bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
    }

    async encrypt(value: string): Promise<string> {
        const hashed = await bcrypt.hash(value, this.createSalt());

        return hashed;
    }

    compare(rawValue: string, encryptedValue: string): boolean {
        const comparedValue = bcrypt.compareSync(rawValue, encryptedValue);

        return comparedValue;
    }
}