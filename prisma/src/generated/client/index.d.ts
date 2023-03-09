
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model users
 * 
 */
export type users = {
  id: string
  v: number | null
  email: string
  name: string
  documentNumber: string
  phoneNumber: string | null
  createdAt: Date
  udpatedAt: Date | null
  password: string | null
  floor: string | null
  number: string | null
  token: string | null
  parkPlace: string | null
  profile: USER_PROFILE | null
}

/**
 * Model syndic
 * 
 */
export type syndic = {
  id: string
  v: number | null
  syndicId: string
  publicPhoneNumber: string
  publicEmail: string
}

/**
 * Model building
 * 
 */
export type building = {
  id: string
  v: number | null
  documentNumber: string
  address: string
  postalCode: string
  owner: string
}

/**
 * Model employee
 * 
 */
export type employee = {
  id: string
  v: number | null
  name: string
  documentNumber: string
  role: JOB_ROLE
  accessLevel: number
  pictureId: string | null
  company: string
  companyDocumentNumber: string
}

/**
 * Model scheduleEvent
 * 
 */
export type scheduleEvent = {
  id: string
  v: number | null
  available: boolean
  createdAt: Date
  updatedAt: Date | null
  dateFrom: Date
  dateTo: Date
  location: string
  timeFrom: string
  timeTo: string
  userId: string
  guestsList: string[]
  eventTitle: string
}

/**
 * Model eventsType
 * 
 */
export type eventsType = {
  id: string
  eventAlias: string
  buildingEventId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const JOB_ROLE: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SYNDIC: 'SYNDIC',
  EMPLOYEE: 'EMPLOYEE'
};

export type JOB_ROLE = (typeof JOB_ROLE)[keyof typeof JOB_ROLE]


export const USER_PROFILE: {
  OWNER: 'OWNER',
  CONDOMINUM: 'CONDOMINUM',
  SYNDIC: 'SYNDIC',
  EMPLOYEE: 'EMPLOYEE',
  OTHER: 'OTHER'
};

export type USER_PROFILE = (typeof USER_PROFILE)[keyof typeof USER_PROFILE]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number}): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.syndic`: Exposes CRUD operations for the **syndic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Syndics
    * const syndics = await prisma.syndic.findMany()
    * ```
    */
  get syndic(): Prisma.syndicDelegate<GlobalReject>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.buildingDelegate<GlobalReject>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.employeeDelegate<GlobalReject>;

  /**
   * `prisma.scheduleEvent`: Exposes CRUD operations for the **scheduleEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleEvents
    * const scheduleEvents = await prisma.scheduleEvent.findMany()
    * ```
    */
  get scheduleEvent(): Prisma.scheduleEventDelegate<GlobalReject>;

  /**
   * `prisma.eventsType`: Exposes CRUD operations for the **eventsType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventsTypes
    * const eventsTypes = await prisma.eventsType.findMany()
    * ```
    */
  get eventsType(): Prisma.eventsTypeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    users: 'users',
    syndic: 'syndic',
    building: 'building',
    employee: 'employee',
    scheduleEvent: 'scheduleEvent',
    eventsType: 'eventsType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    syndic: number
  }

  export type UsersCountOutputTypeSelect = {
    syndic?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Count Type BuildingCountOutputType
   */


  export type BuildingCountOutputType = {
    eventsList: number
  }

  export type BuildingCountOutputTypeSelect = {
    eventsList?: boolean
  }

  export type BuildingCountOutputTypeGetPayload<S extends boolean | null | undefined | BuildingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BuildingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BuildingCountOutputTypeArgs)
    ? BuildingCountOutputType 
    : S extends { select: any } & (BuildingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BuildingCountOutputType ? BuildingCountOutputType[P] : never
  } 
      : BuildingCountOutputType




  // Custom InputTypes

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     * 
    **/
    select?: BuildingCountOutputTypeSelect | null
  }



  /**
   * Count Type EventsTypeCountOutputType
   */


  export type EventsTypeCountOutputType = {
    alias: number
  }

  export type EventsTypeCountOutputTypeSelect = {
    alias?: boolean
  }

  export type EventsTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | EventsTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventsTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EventsTypeCountOutputTypeArgs)
    ? EventsTypeCountOutputType 
    : S extends { select: any } & (EventsTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EventsTypeCountOutputType ? EventsTypeCountOutputType[P] : never
  } 
      : EventsTypeCountOutputType




  // Custom InputTypes

  /**
   * EventsTypeCountOutputType without action
   */
  export type EventsTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventsTypeCountOutputType
     * 
    **/
    select?: EventsTypeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    v: number | null
  }

  export type UsersSumAggregateOutputType = {
    v: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    v: number | null
    email: string | null
    name: string | null
    documentNumber: string | null
    phoneNumber: string | null
    createdAt: Date | null
    udpatedAt: Date | null
    password: string | null
    floor: string | null
    number: string | null
    token: string | null
    parkPlace: string | null
    profile: USER_PROFILE | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    v: number | null
    email: string | null
    name: string | null
    documentNumber: string | null
    phoneNumber: string | null
    createdAt: Date | null
    udpatedAt: Date | null
    password: string | null
    floor: string | null
    number: string | null
    token: string | null
    parkPlace: string | null
    profile: USER_PROFILE | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    v: number
    email: number
    name: number
    documentNumber: number
    phoneNumber: number
    createdAt: number
    udpatedAt: number
    password: number
    floor: number
    number: number
    token: number
    parkPlace: number
    profile: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    v?: true
  }

  export type UsersSumAggregateInputType = {
    v?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    v?: true
    email?: true
    name?: true
    documentNumber?: true
    phoneNumber?: true
    createdAt?: true
    udpatedAt?: true
    password?: true
    floor?: true
    number?: true
    token?: true
    parkPlace?: true
    profile?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    v?: true
    email?: true
    name?: true
    documentNumber?: true
    phoneNumber?: true
    createdAt?: true
    udpatedAt?: true
    password?: true
    floor?: true
    number?: true
    token?: true
    parkPlace?: true
    profile?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    v?: true
    email?: true
    name?: true
    documentNumber?: true
    phoneNumber?: true
    createdAt?: true
    udpatedAt?: true
    password?: true
    floor?: true
    number?: true
    token?: true
    parkPlace?: true
    profile?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    v: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber: string | null
    createdAt: Date
    udpatedAt: Date | null
    password: string | null
    floor: string | null
    number: string | null
    token: string | null
    parkPlace: string | null
    profile: USER_PROFILE | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    v?: boolean
    email?: boolean
    name?: boolean
    documentNumber?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    udpatedAt?: boolean
    password?: boolean
    floor?: boolean
    number?: boolean
    token?: boolean
    parkPlace?: boolean
    syndic?: boolean | usersSyndicArgs
    profile?: boolean
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    syndic?: boolean | usersSyndicArgs
    _count?: boolean | UsersCountOutputTypeArgs
  } 

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'syndic' ? Array < syndicGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'syndic' ? Array < syndicGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: usersFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: usersAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    syndic<T extends usersSyndicArgs= {}>(args?: Subset<T, usersSyndicArgs>): PrismaPromise<Array<syndicGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users findRaw
   */
  export type usersFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * users aggregateRaw
   */
  export type usersAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * users.syndic
   */
  export type usersSyndicArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    where?: syndicWhereInput
    orderBy?: Enumerable<syndicOrderByWithRelationInput>
    cursor?: syndicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SyndicScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Model syndic
   */


  export type AggregateSyndic = {
    _count: SyndicCountAggregateOutputType | null
    _avg: SyndicAvgAggregateOutputType | null
    _sum: SyndicSumAggregateOutputType | null
    _min: SyndicMinAggregateOutputType | null
    _max: SyndicMaxAggregateOutputType | null
  }

  export type SyndicAvgAggregateOutputType = {
    v: number | null
  }

  export type SyndicSumAggregateOutputType = {
    v: number | null
  }

  export type SyndicMinAggregateOutputType = {
    id: string | null
    v: number | null
    syndicId: string | null
    publicPhoneNumber: string | null
    publicEmail: string | null
  }

  export type SyndicMaxAggregateOutputType = {
    id: string | null
    v: number | null
    syndicId: string | null
    publicPhoneNumber: string | null
    publicEmail: string | null
  }

  export type SyndicCountAggregateOutputType = {
    id: number
    v: number
    syndicId: number
    publicPhoneNumber: number
    publicEmail: number
    _all: number
  }


  export type SyndicAvgAggregateInputType = {
    v?: true
  }

  export type SyndicSumAggregateInputType = {
    v?: true
  }

  export type SyndicMinAggregateInputType = {
    id?: true
    v?: true
    syndicId?: true
    publicPhoneNumber?: true
    publicEmail?: true
  }

  export type SyndicMaxAggregateInputType = {
    id?: true
    v?: true
    syndicId?: true
    publicPhoneNumber?: true
    publicEmail?: true
  }

  export type SyndicCountAggregateInputType = {
    id?: true
    v?: true
    syndicId?: true
    publicPhoneNumber?: true
    publicEmail?: true
    _all?: true
  }

  export type SyndicAggregateArgs = {
    /**
     * Filter which syndic to aggregate.
     * 
    **/
    where?: syndicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of syndics to fetch.
     * 
    **/
    orderBy?: Enumerable<syndicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: syndicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` syndics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` syndics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned syndics
    **/
    _count?: true | SyndicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyndicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyndicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyndicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyndicMaxAggregateInputType
  }

  export type GetSyndicAggregateType<T extends SyndicAggregateArgs> = {
        [P in keyof T & keyof AggregateSyndic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyndic[P]>
      : GetScalarType<T[P], AggregateSyndic[P]>
  }




  export type SyndicGroupByArgs = {
    where?: syndicWhereInput
    orderBy?: Enumerable<syndicOrderByWithAggregationInput>
    by: Array<SyndicScalarFieldEnum>
    having?: syndicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyndicCountAggregateInputType | true
    _avg?: SyndicAvgAggregateInputType
    _sum?: SyndicSumAggregateInputType
    _min?: SyndicMinAggregateInputType
    _max?: SyndicMaxAggregateInputType
  }


  export type SyndicGroupByOutputType = {
    id: string
    v: number | null
    syndicId: string
    publicPhoneNumber: string
    publicEmail: string
    _count: SyndicCountAggregateOutputType | null
    _avg: SyndicAvgAggregateOutputType | null
    _sum: SyndicSumAggregateOutputType | null
    _min: SyndicMinAggregateOutputType | null
    _max: SyndicMaxAggregateOutputType | null
  }

  type GetSyndicGroupByPayload<T extends SyndicGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SyndicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyndicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyndicGroupByOutputType[P]>
            : GetScalarType<T[P], SyndicGroupByOutputType[P]>
        }
      >
    >


  export type syndicSelect = {
    id?: boolean
    v?: boolean
    user?: boolean | usersArgs
    syndicId?: boolean
    publicPhoneNumber?: boolean
    publicEmail?: boolean
  }


  export type syndicInclude = {
    user?: boolean | usersArgs
  } 

  export type syndicGetPayload<S extends boolean | null | undefined | syndicArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? syndic :
    S extends undefined ? never :
    S extends { include: any } & (syndicArgs | syndicFindManyArgs)
    ? syndic  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (syndicArgs | syndicFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? usersGetPayload<S['select'][P]> :  P extends keyof syndic ? syndic[P] : never
  } 
      : syndic


  type syndicCountArgs = Merge<
    Omit<syndicFindManyArgs, 'select' | 'include'> & {
      select?: SyndicCountAggregateInputType | true
    }
  >

  export interface syndicDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Syndic that matches the filter.
     * @param {syndicFindUniqueArgs} args - Arguments to find a Syndic
     * @example
     * // Get one Syndic
     * const syndic = await prisma.syndic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends syndicFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, syndicFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'syndic'> extends True ? Prisma__syndicClient<syndicGetPayload<T>> : Prisma__syndicClient<syndicGetPayload<T> | null, null>

    /**
     * Find one Syndic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {syndicFindUniqueOrThrowArgs} args - Arguments to find a Syndic
     * @example
     * // Get one Syndic
     * const syndic = await prisma.syndic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends syndicFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, syndicFindUniqueOrThrowArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Find the first Syndic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {syndicFindFirstArgs} args - Arguments to find a Syndic
     * @example
     * // Get one Syndic
     * const syndic = await prisma.syndic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends syndicFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, syndicFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'syndic'> extends True ? Prisma__syndicClient<syndicGetPayload<T>> : Prisma__syndicClient<syndicGetPayload<T> | null, null>

    /**
     * Find the first Syndic that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {syndicFindFirstOrThrowArgs} args - Arguments to find a Syndic
     * @example
     * // Get one Syndic
     * const syndic = await prisma.syndic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends syndicFindFirstOrThrowArgs>(
      args?: SelectSubset<T, syndicFindFirstOrThrowArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Find zero or more Syndics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {syndicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Syndics
     * const syndics = await prisma.syndic.findMany()
     * 
     * // Get first 10 Syndics
     * const syndics = await prisma.syndic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syndicWithIdOnly = await prisma.syndic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends syndicFindManyArgs>(
      args?: SelectSubset<T, syndicFindManyArgs>
    ): PrismaPromise<Array<syndicGetPayload<T>>>

    /**
     * Create a Syndic.
     * @param {syndicCreateArgs} args - Arguments to create a Syndic.
     * @example
     * // Create one Syndic
     * const Syndic = await prisma.syndic.create({
     *   data: {
     *     // ... data to create a Syndic
     *   }
     * })
     * 
    **/
    create<T extends syndicCreateArgs>(
      args: SelectSubset<T, syndicCreateArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Create many Syndics.
     *     @param {syndicCreateManyArgs} args - Arguments to create many Syndics.
     *     @example
     *     // Create many Syndics
     *     const syndic = await prisma.syndic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends syndicCreateManyArgs>(
      args?: SelectSubset<T, syndicCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Syndic.
     * @param {syndicDeleteArgs} args - Arguments to delete one Syndic.
     * @example
     * // Delete one Syndic
     * const Syndic = await prisma.syndic.delete({
     *   where: {
     *     // ... filter to delete one Syndic
     *   }
     * })
     * 
    **/
    delete<T extends syndicDeleteArgs>(
      args: SelectSubset<T, syndicDeleteArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Update one Syndic.
     * @param {syndicUpdateArgs} args - Arguments to update one Syndic.
     * @example
     * // Update one Syndic
     * const syndic = await prisma.syndic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends syndicUpdateArgs>(
      args: SelectSubset<T, syndicUpdateArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Delete zero or more Syndics.
     * @param {syndicDeleteManyArgs} args - Arguments to filter Syndics to delete.
     * @example
     * // Delete a few Syndics
     * const { count } = await prisma.syndic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends syndicDeleteManyArgs>(
      args?: SelectSubset<T, syndicDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syndics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {syndicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Syndics
     * const syndic = await prisma.syndic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends syndicUpdateManyArgs>(
      args: SelectSubset<T, syndicUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Syndic.
     * @param {syndicUpsertArgs} args - Arguments to update or create a Syndic.
     * @example
     * // Update or create a Syndic
     * const syndic = await prisma.syndic.upsert({
     *   create: {
     *     // ... data to create a Syndic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Syndic we want to update
     *   }
     * })
    **/
    upsert<T extends syndicUpsertArgs>(
      args: SelectSubset<T, syndicUpsertArgs>
    ): Prisma__syndicClient<syndicGetPayload<T>>

    /**
     * Find zero or more Syndics that matches the filter.
     * @param {syndicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const syndic = await prisma.syndic.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: syndicFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Syndic.
     * @param {syndicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const syndic = await prisma.syndic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: syndicAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Syndics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {syndicCountArgs} args - Arguments to filter Syndics to count.
     * @example
     * // Count the number of Syndics
     * const count = await prisma.syndic.count({
     *   where: {
     *     // ... the filter for the Syndics we want to count
     *   }
     * })
    **/
    count<T extends syndicCountArgs>(
      args?: Subset<T, syndicCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyndicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Syndic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyndicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyndicAggregateArgs>(args: Subset<T, SyndicAggregateArgs>): PrismaPromise<GetSyndicAggregateType<T>>

    /**
     * Group by Syndic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyndicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyndicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyndicGroupByArgs['orderBy'] }
        : { orderBy?: SyndicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyndicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyndicGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for syndic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__syndicClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * syndic base type for findUnique actions
   */
  export type syndicFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter, which syndic to fetch.
     * 
    **/
    where: syndicWhereUniqueInput
  }

  /**
   * syndic findUnique
   */
  export interface syndicFindUniqueArgs extends syndicFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * syndic findUniqueOrThrow
   */
  export type syndicFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter, which syndic to fetch.
     * 
    **/
    where: syndicWhereUniqueInput
  }


  /**
   * syndic base type for findFirst actions
   */
  export type syndicFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter, which syndic to fetch.
     * 
    **/
    where?: syndicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of syndics to fetch.
     * 
    **/
    orderBy?: Enumerable<syndicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for syndics.
     * 
    **/
    cursor?: syndicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` syndics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` syndics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of syndics.
     * 
    **/
    distinct?: Enumerable<SyndicScalarFieldEnum>
  }

  /**
   * syndic findFirst
   */
  export interface syndicFindFirstArgs extends syndicFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * syndic findFirstOrThrow
   */
  export type syndicFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter, which syndic to fetch.
     * 
    **/
    where?: syndicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of syndics to fetch.
     * 
    **/
    orderBy?: Enumerable<syndicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for syndics.
     * 
    **/
    cursor?: syndicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` syndics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` syndics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of syndics.
     * 
    **/
    distinct?: Enumerable<SyndicScalarFieldEnum>
  }


  /**
   * syndic findMany
   */
  export type syndicFindManyArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter, which syndics to fetch.
     * 
    **/
    where?: syndicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of syndics to fetch.
     * 
    **/
    orderBy?: Enumerable<syndicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing syndics.
     * 
    **/
    cursor?: syndicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` syndics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` syndics.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SyndicScalarFieldEnum>
  }


  /**
   * syndic create
   */
  export type syndicCreateArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * The data needed to create a syndic.
     * 
    **/
    data: XOR<syndicCreateInput, syndicUncheckedCreateInput>
  }


  /**
   * syndic createMany
   */
  export type syndicCreateManyArgs = {
    /**
     * The data used to create many syndics.
     * 
    **/
    data: Enumerable<syndicCreateManyInput>
  }


  /**
   * syndic update
   */
  export type syndicUpdateArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * The data needed to update a syndic.
     * 
    **/
    data: XOR<syndicUpdateInput, syndicUncheckedUpdateInput>
    /**
     * Choose, which syndic to update.
     * 
    **/
    where: syndicWhereUniqueInput
  }


  /**
   * syndic updateMany
   */
  export type syndicUpdateManyArgs = {
    /**
     * The data used to update syndics.
     * 
    **/
    data: XOR<syndicUpdateManyMutationInput, syndicUncheckedUpdateManyInput>
    /**
     * Filter which syndics to update
     * 
    **/
    where?: syndicWhereInput
  }


  /**
   * syndic upsert
   */
  export type syndicUpsertArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * The filter to search for the syndic to update in case it exists.
     * 
    **/
    where: syndicWhereUniqueInput
    /**
     * In case the syndic found by the `where` argument doesn't exist, create a new syndic with this data.
     * 
    **/
    create: XOR<syndicCreateInput, syndicUncheckedCreateInput>
    /**
     * In case the syndic was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<syndicUpdateInput, syndicUncheckedUpdateInput>
  }


  /**
   * syndic delete
   */
  export type syndicDeleteArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
    /**
     * Filter which syndic to delete.
     * 
    **/
    where: syndicWhereUniqueInput
  }


  /**
   * syndic deleteMany
   */
  export type syndicDeleteManyArgs = {
    /**
     * Filter which syndics to delete
     * 
    **/
    where?: syndicWhereInput
  }


  /**
   * syndic findRaw
   */
  export type syndicFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * syndic aggregateRaw
   */
  export type syndicAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * syndic without action
   */
  export type syndicArgs = {
    /**
     * Select specific fields to fetch from the syndic
     * 
    **/
    select?: syndicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: syndicInclude | null
  }



  /**
   * Model building
   */


  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    v: number | null
  }

  export type BuildingSumAggregateOutputType = {
    v: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    v: number | null
    documentNumber: string | null
    address: string | null
    postalCode: string | null
    owner: string | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    v: number | null
    documentNumber: string | null
    address: string | null
    postalCode: string | null
    owner: string | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    v: number
    documentNumber: number
    address: number
    postalCode: number
    owner: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    v?: true
  }

  export type BuildingSumAggregateInputType = {
    v?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    v?: true
    documentNumber?: true
    address?: true
    postalCode?: true
    owner?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    v?: true
    documentNumber?: true
    address?: true
    postalCode?: true
    owner?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    v?: true
    documentNumber?: true
    address?: true
    postalCode?: true
    owner?: true
    _all?: true
  }

  export type BuildingAggregateArgs = {
    /**
     * Filter which building to aggregate.
     * 
    **/
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     * 
    **/
    orderBy?: Enumerable<buildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs = {
    where?: buildingWhereInput
    orderBy?: Enumerable<buildingOrderByWithAggregationInput>
    by: Array<BuildingScalarFieldEnum>
    having?: buildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }


  export type BuildingGroupByOutputType = {
    id: string
    v: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type buildingSelect = {
    id?: boolean
    v?: boolean
    documentNumber?: boolean
    address?: boolean
    postalCode?: boolean
    owner?: boolean
    eventsList?: boolean | buildingEventsListArgs
    _count?: boolean | BuildingCountOutputTypeArgs
  }


  export type buildingInclude = {
    eventsList?: boolean | buildingEventsListArgs
    _count?: boolean | BuildingCountOutputTypeArgs
  } 

  export type buildingGetPayload<S extends boolean | null | undefined | buildingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? building :
    S extends undefined ? never :
    S extends { include: any } & (buildingArgs | buildingFindManyArgs)
    ? building  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventsList' ? Array < eventsTypeGetPayload<S['include'][P]>>  :
        P extends '_count' ? BuildingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (buildingArgs | buildingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventsList' ? Array < eventsTypeGetPayload<S['select'][P]>>  :
        P extends '_count' ? BuildingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof building ? building[P] : never
  } 
      : building


  type buildingCountArgs = Merge<
    Omit<buildingFindManyArgs, 'select' | 'include'> & {
      select?: BuildingCountAggregateInputType | true
    }
  >

  export interface buildingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Building that matches the filter.
     * @param {buildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends buildingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, buildingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'building'> extends True ? Prisma__buildingClient<buildingGetPayload<T>> : Prisma__buildingClient<buildingGetPayload<T> | null, null>

    /**
     * Find one Building that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {buildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends buildingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, buildingFindUniqueOrThrowArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends buildingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, buildingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'building'> extends True ? Prisma__buildingClient<buildingGetPayload<T>> : Prisma__buildingClient<buildingGetPayload<T> | null, null>

    /**
     * Find the first Building that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends buildingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, buildingFindFirstOrThrowArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends buildingFindManyArgs>(
      args?: SelectSubset<T, buildingFindManyArgs>
    ): PrismaPromise<Array<buildingGetPayload<T>>>

    /**
     * Create a Building.
     * @param {buildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
    **/
    create<T extends buildingCreateArgs>(
      args: SelectSubset<T, buildingCreateArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Create many Buildings.
     *     @param {buildingCreateManyArgs} args - Arguments to create many Buildings.
     *     @example
     *     // Create many Buildings
     *     const building = await prisma.building.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends buildingCreateManyArgs>(
      args?: SelectSubset<T, buildingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Building.
     * @param {buildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
    **/
    delete<T extends buildingDeleteArgs>(
      args: SelectSubset<T, buildingDeleteArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Update one Building.
     * @param {buildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends buildingUpdateArgs>(
      args: SelectSubset<T, buildingUpdateArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Delete zero or more Buildings.
     * @param {buildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends buildingDeleteManyArgs>(
      args?: SelectSubset<T, buildingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends buildingUpdateManyArgs>(
      args: SelectSubset<T, buildingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Building.
     * @param {buildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
    **/
    upsert<T extends buildingUpsertArgs>(
      args: SelectSubset<T, buildingUpsertArgs>
    ): Prisma__buildingClient<buildingGetPayload<T>>

    /**
     * Find zero or more Buildings that matches the filter.
     * @param {buildingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const building = await prisma.building.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: buildingFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Building.
     * @param {buildingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const building = await prisma.building.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: buildingAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends buildingCountArgs>(
      args?: Subset<T, buildingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__buildingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    eventsList<T extends buildingEventsListArgs= {}>(args?: Subset<T, buildingEventsListArgs>): PrismaPromise<Array<eventsTypeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * building base type for findUnique actions
   */
  export type buildingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter, which building to fetch.
     * 
    **/
    where: buildingWhereUniqueInput
  }

  /**
   * building findUnique
   */
  export interface buildingFindUniqueArgs extends buildingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * building findUniqueOrThrow
   */
  export type buildingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter, which building to fetch.
     * 
    **/
    where: buildingWhereUniqueInput
  }


  /**
   * building base type for findFirst actions
   */
  export type buildingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter, which building to fetch.
     * 
    **/
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     * 
    **/
    orderBy?: Enumerable<buildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     * 
    **/
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     * 
    **/
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }

  /**
   * building findFirst
   */
  export interface buildingFindFirstArgs extends buildingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * building findFirstOrThrow
   */
  export type buildingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter, which building to fetch.
     * 
    **/
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     * 
    **/
    orderBy?: Enumerable<buildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     * 
    **/
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     * 
    **/
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }


  /**
   * building findMany
   */
  export type buildingFindManyArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter, which buildings to fetch.
     * 
    **/
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     * 
    **/
    orderBy?: Enumerable<buildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buildings.
     * 
    **/
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }


  /**
   * building create
   */
  export type buildingCreateArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * The data needed to create a building.
     * 
    **/
    data: XOR<buildingCreateInput, buildingUncheckedCreateInput>
  }


  /**
   * building createMany
   */
  export type buildingCreateManyArgs = {
    /**
     * The data used to create many buildings.
     * 
    **/
    data: Enumerable<buildingCreateManyInput>
  }


  /**
   * building update
   */
  export type buildingUpdateArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * The data needed to update a building.
     * 
    **/
    data: XOR<buildingUpdateInput, buildingUncheckedUpdateInput>
    /**
     * Choose, which building to update.
     * 
    **/
    where: buildingWhereUniqueInput
  }


  /**
   * building updateMany
   */
  export type buildingUpdateManyArgs = {
    /**
     * The data used to update buildings.
     * 
    **/
    data: XOR<buildingUpdateManyMutationInput, buildingUncheckedUpdateManyInput>
    /**
     * Filter which buildings to update
     * 
    **/
    where?: buildingWhereInput
  }


  /**
   * building upsert
   */
  export type buildingUpsertArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * The filter to search for the building to update in case it exists.
     * 
    **/
    where: buildingWhereUniqueInput
    /**
     * In case the building found by the `where` argument doesn't exist, create a new building with this data.
     * 
    **/
    create: XOR<buildingCreateInput, buildingUncheckedCreateInput>
    /**
     * In case the building was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<buildingUpdateInput, buildingUncheckedUpdateInput>
  }


  /**
   * building delete
   */
  export type buildingDeleteArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
    /**
     * Filter which building to delete.
     * 
    **/
    where: buildingWhereUniqueInput
  }


  /**
   * building deleteMany
   */
  export type buildingDeleteManyArgs = {
    /**
     * Filter which buildings to delete
     * 
    **/
    where?: buildingWhereInput
  }


  /**
   * building findRaw
   */
  export type buildingFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * building aggregateRaw
   */
  export type buildingAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * building.eventsList
   */
  export type buildingEventsListArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    where?: eventsTypeWhereInput
    orderBy?: Enumerable<eventsTypeOrderByWithRelationInput>
    cursor?: eventsTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventsTypeScalarFieldEnum>
  }


  /**
   * building without action
   */
  export type buildingArgs = {
    /**
     * Select specific fields to fetch from the building
     * 
    **/
    select?: buildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: buildingInclude | null
  }



  /**
   * Model employee
   */


  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    v: number | null
    accessLevel: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    v: number | null
    accessLevel: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    v: number | null
    name: string | null
    documentNumber: string | null
    role: JOB_ROLE | null
    accessLevel: number | null
    pictureId: string | null
    company: string | null
    companyDocumentNumber: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    v: number | null
    name: string | null
    documentNumber: string | null
    role: JOB_ROLE | null
    accessLevel: number | null
    pictureId: string | null
    company: string | null
    companyDocumentNumber: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    v: number
    name: number
    documentNumber: number
    role: number
    accessLevel: number
    pictureId: number
    company: number
    companyDocumentNumber: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    v?: true
    accessLevel?: true
  }

  export type EmployeeSumAggregateInputType = {
    v?: true
    accessLevel?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    v?: true
    name?: true
    documentNumber?: true
    role?: true
    accessLevel?: true
    pictureId?: true
    company?: true
    companyDocumentNumber?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    v?: true
    name?: true
    documentNumber?: true
    role?: true
    accessLevel?: true
    pictureId?: true
    company?: true
    companyDocumentNumber?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    v?: true
    name?: true
    documentNumber?: true
    role?: true
    accessLevel?: true
    pictureId?: true
    company?: true
    companyDocumentNumber?: true
    _all?: true
  }

  export type EmployeeAggregateArgs = {
    /**
     * Filter which employee to aggregate.
     * 
    **/
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     * 
    **/
    orderBy?: Enumerable<employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs = {
    where?: employeeWhereInput
    orderBy?: Enumerable<employeeOrderByWithAggregationInput>
    by: Array<EmployeeScalarFieldEnum>
    having?: employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }


  export type EmployeeGroupByOutputType = {
    id: string
    v: number | null
    name: string
    documentNumber: string
    role: JOB_ROLE
    accessLevel: number
    pictureId: string | null
    company: string
    companyDocumentNumber: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type employeeSelect = {
    id?: boolean
    v?: boolean
    name?: boolean
    documentNumber?: boolean
    role?: boolean
    accessLevel?: boolean
    pictureId?: boolean
    company?: boolean
    companyDocumentNumber?: boolean
  }


  export type employeeGetPayload<S extends boolean | null | undefined | employeeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? employee :
    S extends undefined ? never :
    S extends { include: any } & (employeeArgs | employeeFindManyArgs)
    ? employee 
    : S extends { select: any } & (employeeArgs | employeeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof employee ? employee[P] : never
  } 
      : employee


  type employeeCountArgs = Merge<
    Omit<employeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }
  >

  export interface employeeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends employeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, employeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'employee'> extends True ? Prisma__employeeClient<employeeGetPayload<T>> : Prisma__employeeClient<employeeGetPayload<T> | null, null>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends employeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, employeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'employee'> extends True ? Prisma__employeeClient<employeeGetPayload<T>> : Prisma__employeeClient<employeeGetPayload<T> | null, null>

    /**
     * Find the first Employee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends employeeFindManyArgs>(
      args?: SelectSubset<T, employeeFindManyArgs>
    ): PrismaPromise<Array<employeeGetPayload<T>>>

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends employeeCreateArgs>(
      args: SelectSubset<T, employeeCreateArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends employeeCreateManyArgs>(
      args?: SelectSubset<T, employeeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends employeeDeleteArgs>(
      args: SelectSubset<T, employeeDeleteArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends employeeUpdateArgs>(
      args: SelectSubset<T, employeeUpdateArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends employeeDeleteManyArgs>(
      args?: SelectSubset<T, employeeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends employeeUpdateManyArgs>(
      args: SelectSubset<T, employeeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends employeeUpsertArgs>(
      args: SelectSubset<T, employeeUpsertArgs>
    ): Prisma__employeeClient<employeeGetPayload<T>>

    /**
     * Find zero or more Employees that matches the filter.
     * @param {employeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const employee = await prisma.employee.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: employeeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Employee.
     * @param {employeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const employee = await prisma.employee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: employeeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__employeeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * employee base type for findUnique actions
   */
  export type employeeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter, which employee to fetch.
     * 
    **/
    where: employeeWhereUniqueInput
  }

  /**
   * employee findUnique
   */
  export interface employeeFindUniqueArgs extends employeeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter, which employee to fetch.
     * 
    **/
    where: employeeWhereUniqueInput
  }


  /**
   * employee base type for findFirst actions
   */
  export type employeeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter, which employee to fetch.
     * 
    **/
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     * 
    **/
    orderBy?: Enumerable<employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     * 
    **/
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     * 
    **/
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }

  /**
   * employee findFirst
   */
  export interface employeeFindFirstArgs extends employeeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter, which employee to fetch.
     * 
    **/
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     * 
    **/
    orderBy?: Enumerable<employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     * 
    **/
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     * 
    **/
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * employee findMany
   */
  export type employeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter, which employees to fetch.
     * 
    **/
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     * 
    **/
    orderBy?: Enumerable<employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     * 
    **/
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * employee create
   */
  export type employeeCreateArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * The data needed to create a employee.
     * 
    **/
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>
  }


  /**
   * employee createMany
   */
  export type employeeCreateManyArgs = {
    /**
     * The data used to create many employees.
     * 
    **/
    data: Enumerable<employeeCreateManyInput>
  }


  /**
   * employee update
   */
  export type employeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * The data needed to update a employee.
     * 
    **/
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
    /**
     * Choose, which employee to update.
     * 
    **/
    where: employeeWhereUniqueInput
  }


  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs = {
    /**
     * The data used to update employees.
     * 
    **/
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     * 
    **/
    where?: employeeWhereInput
  }


  /**
   * employee upsert
   */
  export type employeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * The filter to search for the employee to update in case it exists.
     * 
    **/
    where: employeeWhereUniqueInput
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     * 
    **/
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
  }


  /**
   * employee delete
   */
  export type employeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
    /**
     * Filter which employee to delete.
     * 
    **/
    where: employeeWhereUniqueInput
  }


  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs = {
    /**
     * Filter which employees to delete
     * 
    **/
    where?: employeeWhereInput
  }


  /**
   * employee findRaw
   */
  export type employeeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * employee aggregateRaw
   */
  export type employeeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * employee without action
   */
  export type employeeArgs = {
    /**
     * Select specific fields to fetch from the employee
     * 
    **/
    select?: employeeSelect | null
  }



  /**
   * Model scheduleEvent
   */


  export type AggregateScheduleEvent = {
    _count: ScheduleEventCountAggregateOutputType | null
    _avg: ScheduleEventAvgAggregateOutputType | null
    _sum: ScheduleEventSumAggregateOutputType | null
    _min: ScheduleEventMinAggregateOutputType | null
    _max: ScheduleEventMaxAggregateOutputType | null
  }

  export type ScheduleEventAvgAggregateOutputType = {
    v: number | null
  }

  export type ScheduleEventSumAggregateOutputType = {
    v: number | null
  }

  export type ScheduleEventMinAggregateOutputType = {
    id: string | null
    v: number | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dateFrom: Date | null
    dateTo: Date | null
    location: string | null
    timeFrom: string | null
    timeTo: string | null
    userId: string | null
    eventTitle: string | null
  }

  export type ScheduleEventMaxAggregateOutputType = {
    id: string | null
    v: number | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dateFrom: Date | null
    dateTo: Date | null
    location: string | null
    timeFrom: string | null
    timeTo: string | null
    userId: string | null
    eventTitle: string | null
  }

  export type ScheduleEventCountAggregateOutputType = {
    id: number
    v: number
    available: number
    createdAt: number
    updatedAt: number
    dateFrom: number
    dateTo: number
    location: number
    timeFrom: number
    timeTo: number
    userId: number
    guestsList: number
    eventTitle: number
    _all: number
  }


  export type ScheduleEventAvgAggregateInputType = {
    v?: true
  }

  export type ScheduleEventSumAggregateInputType = {
    v?: true
  }

  export type ScheduleEventMinAggregateInputType = {
    id?: true
    v?: true
    available?: true
    createdAt?: true
    updatedAt?: true
    dateFrom?: true
    dateTo?: true
    location?: true
    timeFrom?: true
    timeTo?: true
    userId?: true
    eventTitle?: true
  }

  export type ScheduleEventMaxAggregateInputType = {
    id?: true
    v?: true
    available?: true
    createdAt?: true
    updatedAt?: true
    dateFrom?: true
    dateTo?: true
    location?: true
    timeFrom?: true
    timeTo?: true
    userId?: true
    eventTitle?: true
  }

  export type ScheduleEventCountAggregateInputType = {
    id?: true
    v?: true
    available?: true
    createdAt?: true
    updatedAt?: true
    dateFrom?: true
    dateTo?: true
    location?: true
    timeFrom?: true
    timeTo?: true
    userId?: true
    guestsList?: true
    eventTitle?: true
    _all?: true
  }

  export type ScheduleEventAggregateArgs = {
    /**
     * Filter which scheduleEvent to aggregate.
     * 
    **/
    where?: scheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduleEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: scheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduleEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduleEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scheduleEvents
    **/
    _count?: true | ScheduleEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleEventMaxAggregateInputType
  }

  export type GetScheduleEventAggregateType<T extends ScheduleEventAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleEvent[P]>
      : GetScalarType<T[P], AggregateScheduleEvent[P]>
  }




  export type ScheduleEventGroupByArgs = {
    where?: scheduleEventWhereInput
    orderBy?: Enumerable<scheduleEventOrderByWithAggregationInput>
    by: Array<ScheduleEventScalarFieldEnum>
    having?: scheduleEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleEventCountAggregateInputType | true
    _avg?: ScheduleEventAvgAggregateInputType
    _sum?: ScheduleEventSumAggregateInputType
    _min?: ScheduleEventMinAggregateInputType
    _max?: ScheduleEventMaxAggregateInputType
  }


  export type ScheduleEventGroupByOutputType = {
    id: string
    v: number | null
    available: boolean
    createdAt: Date
    updatedAt: Date | null
    dateFrom: Date
    dateTo: Date
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList: string[]
    eventTitle: string
    _count: ScheduleEventCountAggregateOutputType | null
    _avg: ScheduleEventAvgAggregateOutputType | null
    _sum: ScheduleEventSumAggregateOutputType | null
    _min: ScheduleEventMinAggregateOutputType | null
    _max: ScheduleEventMaxAggregateOutputType | null
  }

  type GetScheduleEventGroupByPayload<T extends ScheduleEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ScheduleEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleEventGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleEventGroupByOutputType[P]>
        }
      >
    >


  export type scheduleEventSelect = {
    id?: boolean
    v?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    location?: boolean
    timeFrom?: boolean
    timeTo?: boolean
    userId?: boolean
    guestsList?: boolean
    eventTitle?: boolean
    alias?: boolean | eventsTypeArgs
  }


  export type scheduleEventInclude = {
    alias?: boolean | eventsTypeArgs
  } 

  export type scheduleEventGetPayload<S extends boolean | null | undefined | scheduleEventArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? scheduleEvent :
    S extends undefined ? never :
    S extends { include: any } & (scheduleEventArgs | scheduleEventFindManyArgs)
    ? scheduleEvent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'alias' ? eventsTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (scheduleEventArgs | scheduleEventFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'alias' ? eventsTypeGetPayload<S['select'][P]> :  P extends keyof scheduleEvent ? scheduleEvent[P] : never
  } 
      : scheduleEvent


  type scheduleEventCountArgs = Merge<
    Omit<scheduleEventFindManyArgs, 'select' | 'include'> & {
      select?: ScheduleEventCountAggregateInputType | true
    }
  >

  export interface scheduleEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ScheduleEvent that matches the filter.
     * @param {scheduleEventFindUniqueArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scheduleEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, scheduleEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'scheduleEvent'> extends True ? Prisma__scheduleEventClient<scheduleEventGetPayload<T>> : Prisma__scheduleEventClient<scheduleEventGetPayload<T> | null, null>

    /**
     * Find one ScheduleEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {scheduleEventFindUniqueOrThrowArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends scheduleEventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, scheduleEventFindUniqueOrThrowArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Find the first ScheduleEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleEventFindFirstArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scheduleEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, scheduleEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'scheduleEvent'> extends True ? Prisma__scheduleEventClient<scheduleEventGetPayload<T>> : Prisma__scheduleEventClient<scheduleEventGetPayload<T> | null, null>

    /**
     * Find the first ScheduleEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleEventFindFirstOrThrowArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends scheduleEventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, scheduleEventFindFirstOrThrowArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Find zero or more ScheduleEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleEvents
     * const scheduleEvents = await prisma.scheduleEvent.findMany()
     * 
     * // Get first 10 ScheduleEvents
     * const scheduleEvents = await prisma.scheduleEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleEventWithIdOnly = await prisma.scheduleEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends scheduleEventFindManyArgs>(
      args?: SelectSubset<T, scheduleEventFindManyArgs>
    ): PrismaPromise<Array<scheduleEventGetPayload<T>>>

    /**
     * Create a ScheduleEvent.
     * @param {scheduleEventCreateArgs} args - Arguments to create a ScheduleEvent.
     * @example
     * // Create one ScheduleEvent
     * const ScheduleEvent = await prisma.scheduleEvent.create({
     *   data: {
     *     // ... data to create a ScheduleEvent
     *   }
     * })
     * 
    **/
    create<T extends scheduleEventCreateArgs>(
      args: SelectSubset<T, scheduleEventCreateArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Create many ScheduleEvents.
     *     @param {scheduleEventCreateManyArgs} args - Arguments to create many ScheduleEvents.
     *     @example
     *     // Create many ScheduleEvents
     *     const scheduleEvent = await prisma.scheduleEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends scheduleEventCreateManyArgs>(
      args?: SelectSubset<T, scheduleEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduleEvent.
     * @param {scheduleEventDeleteArgs} args - Arguments to delete one ScheduleEvent.
     * @example
     * // Delete one ScheduleEvent
     * const ScheduleEvent = await prisma.scheduleEvent.delete({
     *   where: {
     *     // ... filter to delete one ScheduleEvent
     *   }
     * })
     * 
    **/
    delete<T extends scheduleEventDeleteArgs>(
      args: SelectSubset<T, scheduleEventDeleteArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Update one ScheduleEvent.
     * @param {scheduleEventUpdateArgs} args - Arguments to update one ScheduleEvent.
     * @example
     * // Update one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scheduleEventUpdateArgs>(
      args: SelectSubset<T, scheduleEventUpdateArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Delete zero or more ScheduleEvents.
     * @param {scheduleEventDeleteManyArgs} args - Arguments to filter ScheduleEvents to delete.
     * @example
     * // Delete a few ScheduleEvents
     * const { count } = await prisma.scheduleEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scheduleEventDeleteManyArgs>(
      args?: SelectSubset<T, scheduleEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleEvents
     * const scheduleEvent = await prisma.scheduleEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scheduleEventUpdateManyArgs>(
      args: SelectSubset<T, scheduleEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleEvent.
     * @param {scheduleEventUpsertArgs} args - Arguments to update or create a ScheduleEvent.
     * @example
     * // Update or create a ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.upsert({
     *   create: {
     *     // ... data to create a ScheduleEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleEvent we want to update
     *   }
     * })
    **/
    upsert<T extends scheduleEventUpsertArgs>(
      args: SelectSubset<T, scheduleEventUpsertArgs>
    ): Prisma__scheduleEventClient<scheduleEventGetPayload<T>>

    /**
     * Find zero or more ScheduleEvents that matches the filter.
     * @param {scheduleEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scheduleEvent = await prisma.scheduleEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: scheduleEventFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ScheduleEvent.
     * @param {scheduleEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scheduleEvent = await prisma.scheduleEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: scheduleEventAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleEventCountArgs} args - Arguments to filter ScheduleEvents to count.
     * @example
     * // Count the number of ScheduleEvents
     * const count = await prisma.scheduleEvent.count({
     *   where: {
     *     // ... the filter for the ScheduleEvents we want to count
     *   }
     * })
    **/
    count<T extends scheduleEventCountArgs>(
      args?: Subset<T, scheduleEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleEventAggregateArgs>(args: Subset<T, ScheduleEventAggregateArgs>): PrismaPromise<GetScheduleEventAggregateType<T>>

    /**
     * Group by ScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleEventGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleEventGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for scheduleEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__scheduleEventClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    alias<T extends eventsTypeArgs= {}>(args?: Subset<T, eventsTypeArgs>): Prisma__eventsTypeClient<eventsTypeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * scheduleEvent base type for findUnique actions
   */
  export type scheduleEventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter, which scheduleEvent to fetch.
     * 
    **/
    where: scheduleEventWhereUniqueInput
  }

  /**
   * scheduleEvent findUnique
   */
  export interface scheduleEventFindUniqueArgs extends scheduleEventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * scheduleEvent findUniqueOrThrow
   */
  export type scheduleEventFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter, which scheduleEvent to fetch.
     * 
    **/
    where: scheduleEventWhereUniqueInput
  }


  /**
   * scheduleEvent base type for findFirst actions
   */
  export type scheduleEventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter, which scheduleEvent to fetch.
     * 
    **/
    where?: scheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduleEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scheduleEvents.
     * 
    **/
    cursor?: scheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduleEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduleEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scheduleEvents.
     * 
    **/
    distinct?: Enumerable<ScheduleEventScalarFieldEnum>
  }

  /**
   * scheduleEvent findFirst
   */
  export interface scheduleEventFindFirstArgs extends scheduleEventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * scheduleEvent findFirstOrThrow
   */
  export type scheduleEventFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter, which scheduleEvent to fetch.
     * 
    **/
    where?: scheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduleEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scheduleEvents.
     * 
    **/
    cursor?: scheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduleEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduleEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scheduleEvents.
     * 
    **/
    distinct?: Enumerable<ScheduleEventScalarFieldEnum>
  }


  /**
   * scheduleEvent findMany
   */
  export type scheduleEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter, which scheduleEvents to fetch.
     * 
    **/
    where?: scheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduleEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scheduleEvents.
     * 
    **/
    cursor?: scheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduleEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduleEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ScheduleEventScalarFieldEnum>
  }


  /**
   * scheduleEvent create
   */
  export type scheduleEventCreateArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * The data needed to create a scheduleEvent.
     * 
    **/
    data: XOR<scheduleEventCreateInput, scheduleEventUncheckedCreateInput>
  }


  /**
   * scheduleEvent createMany
   */
  export type scheduleEventCreateManyArgs = {
    /**
     * The data used to create many scheduleEvents.
     * 
    **/
    data: Enumerable<scheduleEventCreateManyInput>
  }


  /**
   * scheduleEvent update
   */
  export type scheduleEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * The data needed to update a scheduleEvent.
     * 
    **/
    data: XOR<scheduleEventUpdateInput, scheduleEventUncheckedUpdateInput>
    /**
     * Choose, which scheduleEvent to update.
     * 
    **/
    where: scheduleEventWhereUniqueInput
  }


  /**
   * scheduleEvent updateMany
   */
  export type scheduleEventUpdateManyArgs = {
    /**
     * The data used to update scheduleEvents.
     * 
    **/
    data: XOR<scheduleEventUpdateManyMutationInput, scheduleEventUncheckedUpdateManyInput>
    /**
     * Filter which scheduleEvents to update
     * 
    **/
    where?: scheduleEventWhereInput
  }


  /**
   * scheduleEvent upsert
   */
  export type scheduleEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * The filter to search for the scheduleEvent to update in case it exists.
     * 
    **/
    where: scheduleEventWhereUniqueInput
    /**
     * In case the scheduleEvent found by the `where` argument doesn't exist, create a new scheduleEvent with this data.
     * 
    **/
    create: XOR<scheduleEventCreateInput, scheduleEventUncheckedCreateInput>
    /**
     * In case the scheduleEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<scheduleEventUpdateInput, scheduleEventUncheckedUpdateInput>
  }


  /**
   * scheduleEvent delete
   */
  export type scheduleEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    /**
     * Filter which scheduleEvent to delete.
     * 
    **/
    where: scheduleEventWhereUniqueInput
  }


  /**
   * scheduleEvent deleteMany
   */
  export type scheduleEventDeleteManyArgs = {
    /**
     * Filter which scheduleEvents to delete
     * 
    **/
    where?: scheduleEventWhereInput
  }


  /**
   * scheduleEvent findRaw
   */
  export type scheduleEventFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * scheduleEvent aggregateRaw
   */
  export type scheduleEventAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * scheduleEvent without action
   */
  export type scheduleEventArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
  }



  /**
   * Model eventsType
   */


  export type AggregateEventsType = {
    _count: EventsTypeCountAggregateOutputType | null
    _min: EventsTypeMinAggregateOutputType | null
    _max: EventsTypeMaxAggregateOutputType | null
  }

  export type EventsTypeMinAggregateOutputType = {
    id: string | null
    eventAlias: string | null
    buildingEventId: string | null
  }

  export type EventsTypeMaxAggregateOutputType = {
    id: string | null
    eventAlias: string | null
    buildingEventId: string | null
  }

  export type EventsTypeCountAggregateOutputType = {
    id: number
    eventAlias: number
    buildingEventId: number
    _all: number
  }


  export type EventsTypeMinAggregateInputType = {
    id?: true
    eventAlias?: true
    buildingEventId?: true
  }

  export type EventsTypeMaxAggregateInputType = {
    id?: true
    eventAlias?: true
    buildingEventId?: true
  }

  export type EventsTypeCountAggregateInputType = {
    id?: true
    eventAlias?: true
    buildingEventId?: true
    _all?: true
  }

  export type EventsTypeAggregateArgs = {
    /**
     * Filter which eventsType to aggregate.
     * 
    **/
    where?: eventsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventsTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<eventsTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: eventsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventsTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventsTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventsTypes
    **/
    _count?: true | EventsTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsTypeMaxAggregateInputType
  }

  export type GetEventsTypeAggregateType<T extends EventsTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventsType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventsType[P]>
      : GetScalarType<T[P], AggregateEventsType[P]>
  }




  export type EventsTypeGroupByArgs = {
    where?: eventsTypeWhereInput
    orderBy?: Enumerable<eventsTypeOrderByWithAggregationInput>
    by: Array<EventsTypeScalarFieldEnum>
    having?: eventsTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsTypeCountAggregateInputType | true
    _min?: EventsTypeMinAggregateInputType
    _max?: EventsTypeMaxAggregateInputType
  }


  export type EventsTypeGroupByOutputType = {
    id: string
    eventAlias: string
    buildingEventId: string
    _count: EventsTypeCountAggregateOutputType | null
    _min: EventsTypeMinAggregateOutputType | null
    _max: EventsTypeMaxAggregateOutputType | null
  }

  type GetEventsTypeGroupByPayload<T extends EventsTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventsTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventsTypeGroupByOutputType[P]>
        }
      >
    >


  export type eventsTypeSelect = {
    id?: boolean
    eventAlias?: boolean
    buildingId?: boolean | buildingArgs
    buildingEventId?: boolean
    alias?: boolean | eventsTypeAliasArgs
    _count?: boolean | EventsTypeCountOutputTypeArgs
  }


  export type eventsTypeInclude = {
    buildingId?: boolean | buildingArgs
    alias?: boolean | eventsTypeAliasArgs
    _count?: boolean | EventsTypeCountOutputTypeArgs
  } 

  export type eventsTypeGetPayload<S extends boolean | null | undefined | eventsTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? eventsType :
    S extends undefined ? never :
    S extends { include: any } & (eventsTypeArgs | eventsTypeFindManyArgs)
    ? eventsType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'buildingId' ? buildingGetPayload<S['include'][P]> :
        P extends 'alias' ? Array < scheduleEventGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventsTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (eventsTypeArgs | eventsTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'buildingId' ? buildingGetPayload<S['select'][P]> :
        P extends 'alias' ? Array < scheduleEventGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventsTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof eventsType ? eventsType[P] : never
  } 
      : eventsType


  type eventsTypeCountArgs = Merge<
    Omit<eventsTypeFindManyArgs, 'select' | 'include'> & {
      select?: EventsTypeCountAggregateInputType | true
    }
  >

  export interface eventsTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one EventsType that matches the filter.
     * @param {eventsTypeFindUniqueArgs} args - Arguments to find a EventsType
     * @example
     * // Get one EventsType
     * const eventsType = await prisma.eventsType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eventsTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, eventsTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'eventsType'> extends True ? Prisma__eventsTypeClient<eventsTypeGetPayload<T>> : Prisma__eventsTypeClient<eventsTypeGetPayload<T> | null, null>

    /**
     * Find one EventsType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eventsTypeFindUniqueOrThrowArgs} args - Arguments to find a EventsType
     * @example
     * // Get one EventsType
     * const eventsType = await prisma.eventsType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eventsTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, eventsTypeFindUniqueOrThrowArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Find the first EventsType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsTypeFindFirstArgs} args - Arguments to find a EventsType
     * @example
     * // Get one EventsType
     * const eventsType = await prisma.eventsType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eventsTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, eventsTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'eventsType'> extends True ? Prisma__eventsTypeClient<eventsTypeGetPayload<T>> : Prisma__eventsTypeClient<eventsTypeGetPayload<T> | null, null>

    /**
     * Find the first EventsType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsTypeFindFirstOrThrowArgs} args - Arguments to find a EventsType
     * @example
     * // Get one EventsType
     * const eventsType = await prisma.eventsType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eventsTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, eventsTypeFindFirstOrThrowArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Find zero or more EventsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventsTypes
     * const eventsTypes = await prisma.eventsType.findMany()
     * 
     * // Get first 10 EventsTypes
     * const eventsTypes = await prisma.eventsType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsTypeWithIdOnly = await prisma.eventsType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends eventsTypeFindManyArgs>(
      args?: SelectSubset<T, eventsTypeFindManyArgs>
    ): PrismaPromise<Array<eventsTypeGetPayload<T>>>

    /**
     * Create a EventsType.
     * @param {eventsTypeCreateArgs} args - Arguments to create a EventsType.
     * @example
     * // Create one EventsType
     * const EventsType = await prisma.eventsType.create({
     *   data: {
     *     // ... data to create a EventsType
     *   }
     * })
     * 
    **/
    create<T extends eventsTypeCreateArgs>(
      args: SelectSubset<T, eventsTypeCreateArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Create many EventsTypes.
     *     @param {eventsTypeCreateManyArgs} args - Arguments to create many EventsTypes.
     *     @example
     *     // Create many EventsTypes
     *     const eventsType = await prisma.eventsType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends eventsTypeCreateManyArgs>(
      args?: SelectSubset<T, eventsTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EventsType.
     * @param {eventsTypeDeleteArgs} args - Arguments to delete one EventsType.
     * @example
     * // Delete one EventsType
     * const EventsType = await prisma.eventsType.delete({
     *   where: {
     *     // ... filter to delete one EventsType
     *   }
     * })
     * 
    **/
    delete<T extends eventsTypeDeleteArgs>(
      args: SelectSubset<T, eventsTypeDeleteArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Update one EventsType.
     * @param {eventsTypeUpdateArgs} args - Arguments to update one EventsType.
     * @example
     * // Update one EventsType
     * const eventsType = await prisma.eventsType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eventsTypeUpdateArgs>(
      args: SelectSubset<T, eventsTypeUpdateArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Delete zero or more EventsTypes.
     * @param {eventsTypeDeleteManyArgs} args - Arguments to filter EventsTypes to delete.
     * @example
     * // Delete a few EventsTypes
     * const { count } = await prisma.eventsType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eventsTypeDeleteManyArgs>(
      args?: SelectSubset<T, eventsTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventsTypes
     * const eventsType = await prisma.eventsType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eventsTypeUpdateManyArgs>(
      args: SelectSubset<T, eventsTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EventsType.
     * @param {eventsTypeUpsertArgs} args - Arguments to update or create a EventsType.
     * @example
     * // Update or create a EventsType
     * const eventsType = await prisma.eventsType.upsert({
     *   create: {
     *     // ... data to create a EventsType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventsType we want to update
     *   }
     * })
    **/
    upsert<T extends eventsTypeUpsertArgs>(
      args: SelectSubset<T, eventsTypeUpsertArgs>
    ): Prisma__eventsTypeClient<eventsTypeGetPayload<T>>

    /**
     * Find zero or more EventsTypes that matches the filter.
     * @param {eventsTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventsType = await prisma.eventsType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: eventsTypeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventsType.
     * @param {eventsTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventsType = await prisma.eventsType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: eventsTypeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of EventsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsTypeCountArgs} args - Arguments to filter EventsTypes to count.
     * @example
     * // Count the number of EventsTypes
     * const count = await prisma.eventsType.count({
     *   where: {
     *     // ... the filter for the EventsTypes we want to count
     *   }
     * })
    **/
    count<T extends eventsTypeCountArgs>(
      args?: Subset<T, eventsTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventsType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsTypeAggregateArgs>(args: Subset<T, EventsTypeAggregateArgs>): PrismaPromise<GetEventsTypeAggregateType<T>>

    /**
     * Group by EventsType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventsTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsTypeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for eventsType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__eventsTypeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    buildingId<T extends buildingArgs= {}>(args?: Subset<T, buildingArgs>): Prisma__buildingClient<buildingGetPayload<T> | Null>;

    alias<T extends eventsTypeAliasArgs= {}>(args?: Subset<T, eventsTypeAliasArgs>): PrismaPromise<Array<scheduleEventGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * eventsType base type for findUnique actions
   */
  export type eventsTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter, which eventsType to fetch.
     * 
    **/
    where: eventsTypeWhereUniqueInput
  }

  /**
   * eventsType findUnique
   */
  export interface eventsTypeFindUniqueArgs extends eventsTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * eventsType findUniqueOrThrow
   */
  export type eventsTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter, which eventsType to fetch.
     * 
    **/
    where: eventsTypeWhereUniqueInput
  }


  /**
   * eventsType base type for findFirst actions
   */
  export type eventsTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter, which eventsType to fetch.
     * 
    **/
    where?: eventsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventsTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<eventsTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventsTypes.
     * 
    **/
    cursor?: eventsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventsTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventsTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventsTypes.
     * 
    **/
    distinct?: Enumerable<EventsTypeScalarFieldEnum>
  }

  /**
   * eventsType findFirst
   */
  export interface eventsTypeFindFirstArgs extends eventsTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * eventsType findFirstOrThrow
   */
  export type eventsTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter, which eventsType to fetch.
     * 
    **/
    where?: eventsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventsTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<eventsTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventsTypes.
     * 
    **/
    cursor?: eventsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventsTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventsTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventsTypes.
     * 
    **/
    distinct?: Enumerable<EventsTypeScalarFieldEnum>
  }


  /**
   * eventsType findMany
   */
  export type eventsTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter, which eventsTypes to fetch.
     * 
    **/
    where?: eventsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventsTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<eventsTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventsTypes.
     * 
    **/
    cursor?: eventsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventsTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventsTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventsTypeScalarFieldEnum>
  }


  /**
   * eventsType create
   */
  export type eventsTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * The data needed to create a eventsType.
     * 
    **/
    data: XOR<eventsTypeCreateInput, eventsTypeUncheckedCreateInput>
  }


  /**
   * eventsType createMany
   */
  export type eventsTypeCreateManyArgs = {
    /**
     * The data used to create many eventsTypes.
     * 
    **/
    data: Enumerable<eventsTypeCreateManyInput>
  }


  /**
   * eventsType update
   */
  export type eventsTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * The data needed to update a eventsType.
     * 
    **/
    data: XOR<eventsTypeUpdateInput, eventsTypeUncheckedUpdateInput>
    /**
     * Choose, which eventsType to update.
     * 
    **/
    where: eventsTypeWhereUniqueInput
  }


  /**
   * eventsType updateMany
   */
  export type eventsTypeUpdateManyArgs = {
    /**
     * The data used to update eventsTypes.
     * 
    **/
    data: XOR<eventsTypeUpdateManyMutationInput, eventsTypeUncheckedUpdateManyInput>
    /**
     * Filter which eventsTypes to update
     * 
    **/
    where?: eventsTypeWhereInput
  }


  /**
   * eventsType upsert
   */
  export type eventsTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * The filter to search for the eventsType to update in case it exists.
     * 
    **/
    where: eventsTypeWhereUniqueInput
    /**
     * In case the eventsType found by the `where` argument doesn't exist, create a new eventsType with this data.
     * 
    **/
    create: XOR<eventsTypeCreateInput, eventsTypeUncheckedCreateInput>
    /**
     * In case the eventsType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<eventsTypeUpdateInput, eventsTypeUncheckedUpdateInput>
  }


  /**
   * eventsType delete
   */
  export type eventsTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
    /**
     * Filter which eventsType to delete.
     * 
    **/
    where: eventsTypeWhereUniqueInput
  }


  /**
   * eventsType deleteMany
   */
  export type eventsTypeDeleteManyArgs = {
    /**
     * Filter which eventsTypes to delete
     * 
    **/
    where?: eventsTypeWhereInput
  }


  /**
   * eventsType findRaw
   */
  export type eventsTypeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * eventsType aggregateRaw
   */
  export type eventsTypeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * eventsType.alias
   */
  export type eventsTypeAliasArgs = {
    /**
     * Select specific fields to fetch from the scheduleEvent
     * 
    **/
    select?: scheduleEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleEventInclude | null
    where?: scheduleEventWhereInput
    orderBy?: Enumerable<scheduleEventOrderByWithRelationInput>
    cursor?: scheduleEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ScheduleEventScalarFieldEnum>
  }


  /**
   * eventsType without action
   */
  export type eventsTypeArgs = {
    /**
     * Select specific fields to fetch from the eventsType
     * 
    **/
    select?: eventsTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventsTypeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BuildingScalarFieldEnum: {
    id: 'id',
    v: 'v',
    documentNumber: 'documentNumber',
    address: 'address',
    postalCode: 'postalCode',
    owner: 'owner'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    v: 'v',
    name: 'name',
    documentNumber: 'documentNumber',
    role: 'role',
    accessLevel: 'accessLevel',
    pictureId: 'pictureId',
    company: 'company',
    companyDocumentNumber: 'companyDocumentNumber'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EventsTypeScalarFieldEnum: {
    id: 'id',
    eventAlias: 'eventAlias',
    buildingEventId: 'buildingEventId'
  };

  export type EventsTypeScalarFieldEnum = (typeof EventsTypeScalarFieldEnum)[keyof typeof EventsTypeScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ScheduleEventScalarFieldEnum: {
    id: 'id',
    v: 'v',
    available: 'available',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
    location: 'location',
    timeFrom: 'timeFrom',
    timeTo: 'timeTo',
    userId: 'userId',
    guestsList: 'guestsList',
    eventTitle: 'eventTitle'
  };

  export type ScheduleEventScalarFieldEnum = (typeof ScheduleEventScalarFieldEnum)[keyof typeof ScheduleEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SyndicScalarFieldEnum: {
    id: 'id',
    v: 'v',
    syndicId: 'syndicId',
    publicPhoneNumber: 'publicPhoneNumber',
    publicEmail: 'publicEmail'
  };

  export type SyndicScalarFieldEnum = (typeof SyndicScalarFieldEnum)[keyof typeof SyndicScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    v: 'v',
    email: 'email',
    name: 'name',
    documentNumber: 'documentNumber',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    udpatedAt: 'udpatedAt',
    password: 'password',
    floor: 'floor',
    number: 'number',
    token: 'token',
    parkPlace: 'parkPlace',
    profile: 'profile'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    email?: StringFilter | string
    name?: StringFilter | string
    documentNumber?: StringFilter | string
    phoneNumber?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    udpatedAt?: DateTimeNullableFilter | Date | string | null
    password?: StringNullableFilter | string | null
    floor?: StringNullableFilter | string | null
    number?: StringNullableFilter | string | null
    token?: StringNullableFilter | string | null
    parkPlace?: StringNullableFilter | string | null
    syndic?: SyndicListRelationFilter
    profile?: EnumUSER_PROFILENullableFilter | USER_PROFILE | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    email?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    udpatedAt?: SortOrder
    password?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    token?: SortOrder
    parkPlace?: SortOrder
    syndic?: syndicOrderByRelationAggregateInput
    profile?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: string
    documentNumber?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    email?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    udpatedAt?: SortOrder
    password?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    token?: SortOrder
    parkPlace?: SortOrder
    profile?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    v?: IntNullableWithAggregatesFilter | number | null
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    documentNumber?: StringWithAggregatesFilter | string
    phoneNumber?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    udpatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    floor?: StringNullableWithAggregatesFilter | string | null
    number?: StringNullableWithAggregatesFilter | string | null
    token?: StringNullableWithAggregatesFilter | string | null
    parkPlace?: StringNullableWithAggregatesFilter | string | null
    profile?: EnumUSER_PROFILENullableWithAggregatesFilter | USER_PROFILE | null
  }

  export type syndicWhereInput = {
    AND?: Enumerable<syndicWhereInput>
    OR?: Enumerable<syndicWhereInput>
    NOT?: Enumerable<syndicWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    user?: XOR<UsersRelationFilter, usersWhereInput>
    syndicId?: StringFilter | string
    publicPhoneNumber?: StringFilter | string
    publicEmail?: StringFilter | string
  }

  export type syndicOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    user?: usersOrderByWithRelationInput
    syndicId?: SortOrder
    publicPhoneNumber?: SortOrder
    publicEmail?: SortOrder
  }

  export type syndicWhereUniqueInput = {
    id?: string
  }

  export type syndicOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    syndicId?: SortOrder
    publicPhoneNumber?: SortOrder
    publicEmail?: SortOrder
    _count?: syndicCountOrderByAggregateInput
    _avg?: syndicAvgOrderByAggregateInput
    _max?: syndicMaxOrderByAggregateInput
    _min?: syndicMinOrderByAggregateInput
    _sum?: syndicSumOrderByAggregateInput
  }

  export type syndicScalarWhereWithAggregatesInput = {
    AND?: Enumerable<syndicScalarWhereWithAggregatesInput>
    OR?: Enumerable<syndicScalarWhereWithAggregatesInput>
    NOT?: Enumerable<syndicScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    v?: IntNullableWithAggregatesFilter | number | null
    syndicId?: StringWithAggregatesFilter | string
    publicPhoneNumber?: StringWithAggregatesFilter | string
    publicEmail?: StringWithAggregatesFilter | string
  }

  export type buildingWhereInput = {
    AND?: Enumerable<buildingWhereInput>
    OR?: Enumerable<buildingWhereInput>
    NOT?: Enumerable<buildingWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    documentNumber?: StringFilter | string
    address?: StringFilter | string
    postalCode?: StringFilter | string
    owner?: StringFilter | string
    eventsList?: EventsTypeListRelationFilter
  }

  export type buildingOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    owner?: SortOrder
    eventsList?: eventsTypeOrderByRelationAggregateInput
  }

  export type buildingWhereUniqueInput = {
    id?: string
    documentNumber?: string
  }

  export type buildingOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    owner?: SortOrder
    _count?: buildingCountOrderByAggregateInput
    _avg?: buildingAvgOrderByAggregateInput
    _max?: buildingMaxOrderByAggregateInput
    _min?: buildingMinOrderByAggregateInput
    _sum?: buildingSumOrderByAggregateInput
  }

  export type buildingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<buildingScalarWhereWithAggregatesInput>
    OR?: Enumerable<buildingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<buildingScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    v?: IntNullableWithAggregatesFilter | number | null
    documentNumber?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    postalCode?: StringWithAggregatesFilter | string
    owner?: StringWithAggregatesFilter | string
  }

  export type employeeWhereInput = {
    AND?: Enumerable<employeeWhereInput>
    OR?: Enumerable<employeeWhereInput>
    NOT?: Enumerable<employeeWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    name?: StringFilter | string
    documentNumber?: StringFilter | string
    role?: EnumJOB_ROLEFilter | JOB_ROLE
    accessLevel?: IntFilter | number
    pictureId?: StringNullableFilter | string | null
    company?: StringFilter | string
    companyDocumentNumber?: StringFilter | string
  }

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    role?: SortOrder
    accessLevel?: SortOrder
    pictureId?: SortOrder
    company?: SortOrder
    companyDocumentNumber?: SortOrder
  }

  export type employeeWhereUniqueInput = {
    id?: string
    documentNumber?: string
  }

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    role?: SortOrder
    accessLevel?: SortOrder
    pictureId?: SortOrder
    company?: SortOrder
    companyDocumentNumber?: SortOrder
    _count?: employeeCountOrderByAggregateInput
    _avg?: employeeAvgOrderByAggregateInput
    _max?: employeeMaxOrderByAggregateInput
    _min?: employeeMinOrderByAggregateInput
    _sum?: employeeSumOrderByAggregateInput
  }

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<employeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<employeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<employeeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    v?: IntNullableWithAggregatesFilter | number | null
    name?: StringWithAggregatesFilter | string
    documentNumber?: StringWithAggregatesFilter | string
    role?: EnumJOB_ROLEWithAggregatesFilter | JOB_ROLE
    accessLevel?: IntWithAggregatesFilter | number
    pictureId?: StringNullableWithAggregatesFilter | string | null
    company?: StringWithAggregatesFilter | string
    companyDocumentNumber?: StringWithAggregatesFilter | string
  }

  export type scheduleEventWhereInput = {
    AND?: Enumerable<scheduleEventWhereInput>
    OR?: Enumerable<scheduleEventWhereInput>
    NOT?: Enumerable<scheduleEventWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    available?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    dateFrom?: DateTimeFilter | Date | string
    dateTo?: DateTimeFilter | Date | string
    location?: StringFilter | string
    timeFrom?: StringFilter | string
    timeTo?: StringFilter | string
    userId?: StringFilter | string
    guestsList?: StringNullableListFilter
    eventTitle?: StringFilter | string
    alias?: XOR<EventsTypeRelationFilter, eventsTypeWhereInput>
  }

  export type scheduleEventOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    location?: SortOrder
    timeFrom?: SortOrder
    timeTo?: SortOrder
    userId?: SortOrder
    guestsList?: SortOrder
    eventTitle?: SortOrder
    alias?: eventsTypeOrderByWithRelationInput
  }

  export type scheduleEventWhereUniqueInput = {
    id?: string
    dateFrom?: Date | string
    eventTitle?: string
  }

  export type scheduleEventOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    location?: SortOrder
    timeFrom?: SortOrder
    timeTo?: SortOrder
    userId?: SortOrder
    guestsList?: SortOrder
    eventTitle?: SortOrder
    _count?: scheduleEventCountOrderByAggregateInput
    _avg?: scheduleEventAvgOrderByAggregateInput
    _max?: scheduleEventMaxOrderByAggregateInput
    _min?: scheduleEventMinOrderByAggregateInput
    _sum?: scheduleEventSumOrderByAggregateInput
  }

  export type scheduleEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<scheduleEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<scheduleEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<scheduleEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    v?: IntNullableWithAggregatesFilter | number | null
    available?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateFrom?: DateTimeWithAggregatesFilter | Date | string
    dateTo?: DateTimeWithAggregatesFilter | Date | string
    location?: StringWithAggregatesFilter | string
    timeFrom?: StringWithAggregatesFilter | string
    timeTo?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    guestsList?: StringNullableListFilter
    eventTitle?: StringWithAggregatesFilter | string
  }

  export type eventsTypeWhereInput = {
    AND?: Enumerable<eventsTypeWhereInput>
    OR?: Enumerable<eventsTypeWhereInput>
    NOT?: Enumerable<eventsTypeWhereInput>
    id?: StringFilter | string
    eventAlias?: StringFilter | string
    buildingId?: XOR<BuildingRelationFilter, buildingWhereInput>
    buildingEventId?: StringFilter | string
    alias?: ScheduleEventListRelationFilter
  }

  export type eventsTypeOrderByWithRelationInput = {
    id?: SortOrder
    eventAlias?: SortOrder
    buildingId?: buildingOrderByWithRelationInput
    buildingEventId?: SortOrder
    alias?: scheduleEventOrderByRelationAggregateInput
  }

  export type eventsTypeWhereUniqueInput = {
    id?: string
    eventAlias?: string
  }

  export type eventsTypeOrderByWithAggregationInput = {
    id?: SortOrder
    eventAlias?: SortOrder
    buildingEventId?: SortOrder
    _count?: eventsTypeCountOrderByAggregateInput
    _max?: eventsTypeMaxOrderByAggregateInput
    _min?: eventsTypeMinOrderByAggregateInput
  }

  export type eventsTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<eventsTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<eventsTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<eventsTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    eventAlias?: StringWithAggregatesFilter | string
    buildingEventId?: StringWithAggregatesFilter | string
  }

  export type usersCreateInput = {
    id?: string
    v?: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber?: string | null
    createdAt?: Date | string
    udpatedAt?: Date | string | null
    password?: string | null
    floor?: string | null
    number?: string | null
    token?: string | null
    parkPlace?: string | null
    syndic?: syndicCreateNestedManyWithoutUserInput
    profile?: USER_PROFILE | null
  }

  export type usersUncheckedCreateInput = {
    id?: string
    v?: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber?: string | null
    createdAt?: Date | string
    udpatedAt?: Date | string | null
    password?: string | null
    floor?: string | null
    number?: string | null
    token?: string | null
    parkPlace?: string | null
    syndic?: syndicUncheckedCreateNestedManyWithoutUserInput
    profile?: USER_PROFILE | null
  }

  export type usersUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    syndic?: syndicUpdateManyWithoutUserNestedInput
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type usersUncheckedUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    syndic?: syndicUncheckedUpdateManyWithoutUserNestedInput
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type usersCreateManyInput = {
    id?: string
    v?: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber?: string | null
    createdAt?: Date | string
    udpatedAt?: Date | string | null
    password?: string | null
    floor?: string | null
    number?: string | null
    token?: string | null
    parkPlace?: string | null
    profile?: USER_PROFILE | null
  }

  export type usersUpdateManyMutationInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type usersUncheckedUpdateManyInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type syndicCreateInput = {
    id?: string
    v?: number | null
    user: usersCreateNestedOneWithoutSyndicInput
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicUncheckedCreateInput = {
    id?: string
    v?: number | null
    syndicId: string
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    user?: usersUpdateOneRequiredWithoutSyndicNestedInput
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type syndicUncheckedUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    syndicId?: StringFieldUpdateOperationsInput | string
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type syndicCreateManyInput = {
    id?: string
    v?: number | null
    syndicId: string
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicUpdateManyMutationInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type syndicUncheckedUpdateManyInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    syndicId?: StringFieldUpdateOperationsInput | string
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type buildingCreateInput = {
    id?: string
    v?: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
    eventsList?: eventsTypeCreateNestedManyWithoutBuildingIdInput
  }

  export type buildingUncheckedCreateInput = {
    id?: string
    v?: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
    eventsList?: eventsTypeUncheckedCreateNestedManyWithoutBuildingIdInput
  }

  export type buildingUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    eventsList?: eventsTypeUpdateManyWithoutBuildingIdNestedInput
  }

  export type buildingUncheckedUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    eventsList?: eventsTypeUncheckedUpdateManyWithoutBuildingIdNestedInput
  }

  export type buildingCreateManyInput = {
    id?: string
    v?: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
  }

  export type buildingUpdateManyMutationInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type buildingUncheckedUpdateManyInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type employeeCreateInput = {
    id?: string
    v?: number | null
    name: string
    documentNumber: string
    role?: JOB_ROLE
    accessLevel: number
    pictureId?: string | null
    company: string
    companyDocumentNumber: string
  }

  export type employeeUncheckedCreateInput = {
    id?: string
    v?: number | null
    name: string
    documentNumber: string
    role?: JOB_ROLE
    accessLevel: number
    pictureId?: string | null
    company: string
    companyDocumentNumber: string
  }

  export type employeeUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumJOB_ROLEFieldUpdateOperationsInput | JOB_ROLE
    accessLevel?: IntFieldUpdateOperationsInput | number
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    companyDocumentNumber?: StringFieldUpdateOperationsInput | string
  }

  export type employeeUncheckedUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumJOB_ROLEFieldUpdateOperationsInput | JOB_ROLE
    accessLevel?: IntFieldUpdateOperationsInput | number
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    companyDocumentNumber?: StringFieldUpdateOperationsInput | string
  }

  export type employeeCreateManyInput = {
    id?: string
    v?: number | null
    name: string
    documentNumber: string
    role?: JOB_ROLE
    accessLevel: number
    pictureId?: string | null
    company: string
    companyDocumentNumber: string
  }

  export type employeeUpdateManyMutationInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumJOB_ROLEFieldUpdateOperationsInput | JOB_ROLE
    accessLevel?: IntFieldUpdateOperationsInput | number
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    companyDocumentNumber?: StringFieldUpdateOperationsInput | string
  }

  export type employeeUncheckedUpdateManyInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumJOB_ROLEFieldUpdateOperationsInput | JOB_ROLE
    accessLevel?: IntFieldUpdateOperationsInput | number
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: StringFieldUpdateOperationsInput | string
    companyDocumentNumber?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleEventCreateInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
    alias: eventsTypeCreateNestedOneWithoutAliasInput
  }

  export type scheduleEventUncheckedCreateInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
    eventTitle: string
  }

  export type scheduleEventUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
    alias?: eventsTypeUpdateOneRequiredWithoutAliasNestedInput
  }

  export type scheduleEventUncheckedUpdateInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
    eventTitle?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleEventCreateManyInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
    eventTitle: string
  }

  export type scheduleEventUpdateManyMutationInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
  }

  export type scheduleEventUncheckedUpdateManyInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
    eventTitle?: StringFieldUpdateOperationsInput | string
  }

  export type eventsTypeCreateInput = {
    id?: string
    eventAlias: string
    buildingId: buildingCreateNestedOneWithoutEventsListInput
    alias?: scheduleEventCreateNestedManyWithoutAliasInput
  }

  export type eventsTypeUncheckedCreateInput = {
    id?: string
    eventAlias: string
    buildingEventId: string
    alias?: scheduleEventUncheckedCreateNestedManyWithoutAliasInput
  }

  export type eventsTypeUpdateInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    buildingId?: buildingUpdateOneRequiredWithoutEventsListNestedInput
    alias?: scheduleEventUpdateManyWithoutAliasNestedInput
  }

  export type eventsTypeUncheckedUpdateInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    buildingEventId?: StringFieldUpdateOperationsInput | string
    alias?: scheduleEventUncheckedUpdateManyWithoutAliasNestedInput
  }

  export type eventsTypeCreateManyInput = {
    id?: string
    eventAlias: string
    buildingEventId: string
  }

  export type eventsTypeUpdateManyMutationInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
  }

  export type eventsTypeUncheckedUpdateManyInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    buildingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type SyndicListRelationFilter = {
    every?: syndicWhereInput
    some?: syndicWhereInput
    none?: syndicWhereInput
  }

  export type EnumUSER_PROFILENullableFilter = {
    equals?: USER_PROFILE | null
    in?: Enumerable<USER_PROFILE> | null
    notIn?: Enumerable<USER_PROFILE> | null
    not?: NestedEnumUSER_PROFILENullableFilter | USER_PROFILE | null
    isSet?: boolean
  }

  export type syndicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    email?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    udpatedAt?: SortOrder
    password?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    token?: SortOrder
    parkPlace?: SortOrder
    profile?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    email?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    udpatedAt?: SortOrder
    password?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    token?: SortOrder
    parkPlace?: SortOrder
    profile?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    email?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    udpatedAt?: SortOrder
    password?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    token?: SortOrder
    parkPlace?: SortOrder
    profile?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type EnumUSER_PROFILENullableWithAggregatesFilter = {
    equals?: USER_PROFILE | null
    in?: Enumerable<USER_PROFILE> | null
    notIn?: Enumerable<USER_PROFILE> | null
    not?: NestedEnumUSER_PROFILENullableWithAggregatesFilter | USER_PROFILE | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumUSER_PROFILENullableFilter
    _max?: NestedEnumUSER_PROFILENullableFilter
    isSet?: boolean
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type syndicCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    syndicId?: SortOrder
    publicPhoneNumber?: SortOrder
    publicEmail?: SortOrder
  }

  export type syndicAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type syndicMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    syndicId?: SortOrder
    publicPhoneNumber?: SortOrder
    publicEmail?: SortOrder
  }

  export type syndicMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    syndicId?: SortOrder
    publicPhoneNumber?: SortOrder
    publicEmail?: SortOrder
  }

  export type syndicSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type EventsTypeListRelationFilter = {
    every?: eventsTypeWhereInput
    some?: eventsTypeWhereInput
    none?: eventsTypeWhereInput
  }

  export type eventsTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type buildingCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    owner?: SortOrder
  }

  export type buildingAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type buildingMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    owner?: SortOrder
  }

  export type buildingMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    owner?: SortOrder
  }

  export type buildingSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type EnumJOB_ROLEFilter = {
    equals?: JOB_ROLE
    in?: Enumerable<JOB_ROLE>
    notIn?: Enumerable<JOB_ROLE>
    not?: NestedEnumJOB_ROLEFilter | JOB_ROLE
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    role?: SortOrder
    accessLevel?: SortOrder
    pictureId?: SortOrder
    company?: SortOrder
    companyDocumentNumber?: SortOrder
  }

  export type employeeAvgOrderByAggregateInput = {
    v?: SortOrder
    accessLevel?: SortOrder
  }

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    role?: SortOrder
    accessLevel?: SortOrder
    pictureId?: SortOrder
    company?: SortOrder
    companyDocumentNumber?: SortOrder
  }

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    name?: SortOrder
    documentNumber?: SortOrder
    role?: SortOrder
    accessLevel?: SortOrder
    pictureId?: SortOrder
    company?: SortOrder
    companyDocumentNumber?: SortOrder
  }

  export type employeeSumOrderByAggregateInput = {
    v?: SortOrder
    accessLevel?: SortOrder
  }

  export type EnumJOB_ROLEWithAggregatesFilter = {
    equals?: JOB_ROLE
    in?: Enumerable<JOB_ROLE>
    notIn?: Enumerable<JOB_ROLE>
    not?: NestedEnumJOB_ROLEWithAggregatesFilter | JOB_ROLE
    _count?: NestedIntFilter
    _min?: NestedEnumJOB_ROLEFilter
    _max?: NestedEnumJOB_ROLEFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type EventsTypeRelationFilter = {
    is?: eventsTypeWhereInput
    isNot?: eventsTypeWhereInput
  }

  export type scheduleEventCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    location?: SortOrder
    timeFrom?: SortOrder
    timeTo?: SortOrder
    userId?: SortOrder
    guestsList?: SortOrder
    eventTitle?: SortOrder
  }

  export type scheduleEventAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type scheduleEventMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    location?: SortOrder
    timeFrom?: SortOrder
    timeTo?: SortOrder
    userId?: SortOrder
    eventTitle?: SortOrder
  }

  export type scheduleEventMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    location?: SortOrder
    timeFrom?: SortOrder
    timeTo?: SortOrder
    userId?: SortOrder
    eventTitle?: SortOrder
  }

  export type scheduleEventSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BuildingRelationFilter = {
    is?: buildingWhereInput
    isNot?: buildingWhereInput
  }

  export type ScheduleEventListRelationFilter = {
    every?: scheduleEventWhereInput
    some?: scheduleEventWhereInput
    none?: scheduleEventWhereInput
  }

  export type scheduleEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsTypeCountOrderByAggregateInput = {
    id?: SortOrder
    eventAlias?: SortOrder
    buildingEventId?: SortOrder
  }

  export type eventsTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventAlias?: SortOrder
    buildingEventId?: SortOrder
  }

  export type eventsTypeMinOrderByAggregateInput = {
    id?: SortOrder
    eventAlias?: SortOrder
    buildingEventId?: SortOrder
  }

  export type syndicCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<syndicCreateWithoutUserInput>, Enumerable<syndicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<syndicCreateOrConnectWithoutUserInput>
    createMany?: syndicCreateManyUserInputEnvelope
    connect?: Enumerable<syndicWhereUniqueInput>
  }

  export type syndicUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<syndicCreateWithoutUserInput>, Enumerable<syndicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<syndicCreateOrConnectWithoutUserInput>
    createMany?: syndicCreateManyUserInputEnvelope
    connect?: Enumerable<syndicWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type syndicUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<syndicCreateWithoutUserInput>, Enumerable<syndicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<syndicCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<syndicUpsertWithWhereUniqueWithoutUserInput>
    createMany?: syndicCreateManyUserInputEnvelope
    set?: Enumerable<syndicWhereUniqueInput>
    disconnect?: Enumerable<syndicWhereUniqueInput>
    delete?: Enumerable<syndicWhereUniqueInput>
    connect?: Enumerable<syndicWhereUniqueInput>
    update?: Enumerable<syndicUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<syndicUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<syndicScalarWhereInput>
  }

  export type NullableEnumUSER_PROFILEFieldUpdateOperationsInput = {
    set?: USER_PROFILE | null
    unset?: boolean
  }

  export type syndicUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<syndicCreateWithoutUserInput>, Enumerable<syndicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<syndicCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<syndicUpsertWithWhereUniqueWithoutUserInput>
    createMany?: syndicCreateManyUserInputEnvelope
    set?: Enumerable<syndicWhereUniqueInput>
    disconnect?: Enumerable<syndicWhereUniqueInput>
    delete?: Enumerable<syndicWhereUniqueInput>
    connect?: Enumerable<syndicWhereUniqueInput>
    update?: Enumerable<syndicUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<syndicUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<syndicScalarWhereInput>
  }

  export type usersCreateNestedOneWithoutSyndicInput = {
    create?: XOR<usersCreateWithoutSyndicInput, usersUncheckedCreateWithoutSyndicInput>
    connectOrCreate?: usersCreateOrConnectWithoutSyndicInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSyndicNestedInput = {
    create?: XOR<usersCreateWithoutSyndicInput, usersUncheckedCreateWithoutSyndicInput>
    connectOrCreate?: usersCreateOrConnectWithoutSyndicInput
    upsert?: usersUpsertWithoutSyndicInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutSyndicInput, usersUncheckedUpdateWithoutSyndicInput>
  }

  export type eventsTypeCreateNestedManyWithoutBuildingIdInput = {
    create?: XOR<Enumerable<eventsTypeCreateWithoutBuildingIdInput>, Enumerable<eventsTypeUncheckedCreateWithoutBuildingIdInput>>
    connectOrCreate?: Enumerable<eventsTypeCreateOrConnectWithoutBuildingIdInput>
    createMany?: eventsTypeCreateManyBuildingIdInputEnvelope
    connect?: Enumerable<eventsTypeWhereUniqueInput>
  }

  export type eventsTypeUncheckedCreateNestedManyWithoutBuildingIdInput = {
    create?: XOR<Enumerable<eventsTypeCreateWithoutBuildingIdInput>, Enumerable<eventsTypeUncheckedCreateWithoutBuildingIdInput>>
    connectOrCreate?: Enumerable<eventsTypeCreateOrConnectWithoutBuildingIdInput>
    createMany?: eventsTypeCreateManyBuildingIdInputEnvelope
    connect?: Enumerable<eventsTypeWhereUniqueInput>
  }

  export type eventsTypeUpdateManyWithoutBuildingIdNestedInput = {
    create?: XOR<Enumerable<eventsTypeCreateWithoutBuildingIdInput>, Enumerable<eventsTypeUncheckedCreateWithoutBuildingIdInput>>
    connectOrCreate?: Enumerable<eventsTypeCreateOrConnectWithoutBuildingIdInput>
    upsert?: Enumerable<eventsTypeUpsertWithWhereUniqueWithoutBuildingIdInput>
    createMany?: eventsTypeCreateManyBuildingIdInputEnvelope
    set?: Enumerable<eventsTypeWhereUniqueInput>
    disconnect?: Enumerable<eventsTypeWhereUniqueInput>
    delete?: Enumerable<eventsTypeWhereUniqueInput>
    connect?: Enumerable<eventsTypeWhereUniqueInput>
    update?: Enumerable<eventsTypeUpdateWithWhereUniqueWithoutBuildingIdInput>
    updateMany?: Enumerable<eventsTypeUpdateManyWithWhereWithoutBuildingIdInput>
    deleteMany?: Enumerable<eventsTypeScalarWhereInput>
  }

  export type eventsTypeUncheckedUpdateManyWithoutBuildingIdNestedInput = {
    create?: XOR<Enumerable<eventsTypeCreateWithoutBuildingIdInput>, Enumerable<eventsTypeUncheckedCreateWithoutBuildingIdInput>>
    connectOrCreate?: Enumerable<eventsTypeCreateOrConnectWithoutBuildingIdInput>
    upsert?: Enumerable<eventsTypeUpsertWithWhereUniqueWithoutBuildingIdInput>
    createMany?: eventsTypeCreateManyBuildingIdInputEnvelope
    set?: Enumerable<eventsTypeWhereUniqueInput>
    disconnect?: Enumerable<eventsTypeWhereUniqueInput>
    delete?: Enumerable<eventsTypeWhereUniqueInput>
    connect?: Enumerable<eventsTypeWhereUniqueInput>
    update?: Enumerable<eventsTypeUpdateWithWhereUniqueWithoutBuildingIdInput>
    updateMany?: Enumerable<eventsTypeUpdateManyWithWhereWithoutBuildingIdInput>
    deleteMany?: Enumerable<eventsTypeScalarWhereInput>
  }

  export type EnumJOB_ROLEFieldUpdateOperationsInput = {
    set?: JOB_ROLE
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type scheduleEventCreateguestsListInput = {
    set: Enumerable<string>
  }

  export type eventsTypeCreateNestedOneWithoutAliasInput = {
    create?: XOR<eventsTypeCreateWithoutAliasInput, eventsTypeUncheckedCreateWithoutAliasInput>
    connectOrCreate?: eventsTypeCreateOrConnectWithoutAliasInput
    connect?: eventsTypeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type scheduleEventUpdateguestsListInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type eventsTypeUpdateOneRequiredWithoutAliasNestedInput = {
    create?: XOR<eventsTypeCreateWithoutAliasInput, eventsTypeUncheckedCreateWithoutAliasInput>
    connectOrCreate?: eventsTypeCreateOrConnectWithoutAliasInput
    upsert?: eventsTypeUpsertWithoutAliasInput
    connect?: eventsTypeWhereUniqueInput
    update?: XOR<eventsTypeUpdateWithoutAliasInput, eventsTypeUncheckedUpdateWithoutAliasInput>
  }

  export type buildingCreateNestedOneWithoutEventsListInput = {
    create?: XOR<buildingCreateWithoutEventsListInput, buildingUncheckedCreateWithoutEventsListInput>
    connectOrCreate?: buildingCreateOrConnectWithoutEventsListInput
    connect?: buildingWhereUniqueInput
  }

  export type scheduleEventCreateNestedManyWithoutAliasInput = {
    create?: XOR<Enumerable<scheduleEventCreateWithoutAliasInput>, Enumerable<scheduleEventUncheckedCreateWithoutAliasInput>>
    connectOrCreate?: Enumerable<scheduleEventCreateOrConnectWithoutAliasInput>
    createMany?: scheduleEventCreateManyAliasInputEnvelope
    connect?: Enumerable<scheduleEventWhereUniqueInput>
  }

  export type scheduleEventUncheckedCreateNestedManyWithoutAliasInput = {
    create?: XOR<Enumerable<scheduleEventCreateWithoutAliasInput>, Enumerable<scheduleEventUncheckedCreateWithoutAliasInput>>
    connectOrCreate?: Enumerable<scheduleEventCreateOrConnectWithoutAliasInput>
    createMany?: scheduleEventCreateManyAliasInputEnvelope
    connect?: Enumerable<scheduleEventWhereUniqueInput>
  }

  export type buildingUpdateOneRequiredWithoutEventsListNestedInput = {
    create?: XOR<buildingCreateWithoutEventsListInput, buildingUncheckedCreateWithoutEventsListInput>
    connectOrCreate?: buildingCreateOrConnectWithoutEventsListInput
    upsert?: buildingUpsertWithoutEventsListInput
    connect?: buildingWhereUniqueInput
    update?: XOR<buildingUpdateWithoutEventsListInput, buildingUncheckedUpdateWithoutEventsListInput>
  }

  export type scheduleEventUpdateManyWithoutAliasNestedInput = {
    create?: XOR<Enumerable<scheduleEventCreateWithoutAliasInput>, Enumerable<scheduleEventUncheckedCreateWithoutAliasInput>>
    connectOrCreate?: Enumerable<scheduleEventCreateOrConnectWithoutAliasInput>
    upsert?: Enumerable<scheduleEventUpsertWithWhereUniqueWithoutAliasInput>
    createMany?: scheduleEventCreateManyAliasInputEnvelope
    set?: Enumerable<scheduleEventWhereUniqueInput>
    disconnect?: Enumerable<scheduleEventWhereUniqueInput>
    delete?: Enumerable<scheduleEventWhereUniqueInput>
    connect?: Enumerable<scheduleEventWhereUniqueInput>
    update?: Enumerable<scheduleEventUpdateWithWhereUniqueWithoutAliasInput>
    updateMany?: Enumerable<scheduleEventUpdateManyWithWhereWithoutAliasInput>
    deleteMany?: Enumerable<scheduleEventScalarWhereInput>
  }

  export type scheduleEventUncheckedUpdateManyWithoutAliasNestedInput = {
    create?: XOR<Enumerable<scheduleEventCreateWithoutAliasInput>, Enumerable<scheduleEventUncheckedCreateWithoutAliasInput>>
    connectOrCreate?: Enumerable<scheduleEventCreateOrConnectWithoutAliasInput>
    upsert?: Enumerable<scheduleEventUpsertWithWhereUniqueWithoutAliasInput>
    createMany?: scheduleEventCreateManyAliasInputEnvelope
    set?: Enumerable<scheduleEventWhereUniqueInput>
    disconnect?: Enumerable<scheduleEventWhereUniqueInput>
    delete?: Enumerable<scheduleEventWhereUniqueInput>
    connect?: Enumerable<scheduleEventWhereUniqueInput>
    update?: Enumerable<scheduleEventUpdateWithWhereUniqueWithoutAliasInput>
    updateMany?: Enumerable<scheduleEventUpdateManyWithWhereWithoutAliasInput>
    deleteMany?: Enumerable<scheduleEventScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumUSER_PROFILENullableFilter = {
    equals?: USER_PROFILE | null
    in?: Enumerable<USER_PROFILE> | null
    notIn?: Enumerable<USER_PROFILE> | null
    not?: NestedEnumUSER_PROFILENullableFilter | USER_PROFILE | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type NestedEnumUSER_PROFILENullableWithAggregatesFilter = {
    equals?: USER_PROFILE | null
    in?: Enumerable<USER_PROFILE> | null
    notIn?: Enumerable<USER_PROFILE> | null
    not?: NestedEnumUSER_PROFILENullableWithAggregatesFilter | USER_PROFILE | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumUSER_PROFILENullableFilter
    _max?: NestedEnumUSER_PROFILENullableFilter
    isSet?: boolean
  }

  export type NestedEnumJOB_ROLEFilter = {
    equals?: JOB_ROLE
    in?: Enumerable<JOB_ROLE>
    notIn?: Enumerable<JOB_ROLE>
    not?: NestedEnumJOB_ROLEFilter | JOB_ROLE
  }

  export type NestedEnumJOB_ROLEWithAggregatesFilter = {
    equals?: JOB_ROLE
    in?: Enumerable<JOB_ROLE>
    notIn?: Enumerable<JOB_ROLE>
    not?: NestedEnumJOB_ROLEWithAggregatesFilter | JOB_ROLE
    _count?: NestedIntFilter
    _min?: NestedEnumJOB_ROLEFilter
    _max?: NestedEnumJOB_ROLEFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type syndicCreateWithoutUserInput = {
    id?: string
    v?: number | null
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicUncheckedCreateWithoutUserInput = {
    id?: string
    v?: number | null
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicCreateOrConnectWithoutUserInput = {
    where: syndicWhereUniqueInput
    create: XOR<syndicCreateWithoutUserInput, syndicUncheckedCreateWithoutUserInput>
  }

  export type syndicCreateManyUserInputEnvelope = {
    data: Enumerable<syndicCreateManyUserInput>
  }

  export type syndicUpsertWithWhereUniqueWithoutUserInput = {
    where: syndicWhereUniqueInput
    update: XOR<syndicUpdateWithoutUserInput, syndicUncheckedUpdateWithoutUserInput>
    create: XOR<syndicCreateWithoutUserInput, syndicUncheckedCreateWithoutUserInput>
  }

  export type syndicUpdateWithWhereUniqueWithoutUserInput = {
    where: syndicWhereUniqueInput
    data: XOR<syndicUpdateWithoutUserInput, syndicUncheckedUpdateWithoutUserInput>
  }

  export type syndicUpdateManyWithWhereWithoutUserInput = {
    where: syndicScalarWhereInput
    data: XOR<syndicUpdateManyMutationInput, syndicUncheckedUpdateManyWithoutSyndicInput>
  }

  export type syndicScalarWhereInput = {
    AND?: Enumerable<syndicScalarWhereInput>
    OR?: Enumerable<syndicScalarWhereInput>
    NOT?: Enumerable<syndicScalarWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    syndicId?: StringFilter | string
    publicPhoneNumber?: StringFilter | string
    publicEmail?: StringFilter | string
  }

  export type usersCreateWithoutSyndicInput = {
    id?: string
    v?: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber?: string | null
    createdAt?: Date | string
    udpatedAt?: Date | string | null
    password?: string | null
    floor?: string | null
    number?: string | null
    token?: string | null
    parkPlace?: string | null
    profile?: USER_PROFILE | null
  }

  export type usersUncheckedCreateWithoutSyndicInput = {
    id?: string
    v?: number | null
    email: string
    name: string
    documentNumber: string
    phoneNumber?: string | null
    createdAt?: Date | string
    udpatedAt?: Date | string | null
    password?: string | null
    floor?: string | null
    number?: string | null
    token?: string | null
    parkPlace?: string | null
    profile?: USER_PROFILE | null
  }

  export type usersCreateOrConnectWithoutSyndicInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSyndicInput, usersUncheckedCreateWithoutSyndicInput>
  }

  export type usersUpsertWithoutSyndicInput = {
    update: XOR<usersUpdateWithoutSyndicInput, usersUncheckedUpdateWithoutSyndicInput>
    create: XOR<usersCreateWithoutSyndicInput, usersUncheckedCreateWithoutSyndicInput>
  }

  export type usersUpdateWithoutSyndicInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type usersUncheckedUpdateWithoutSyndicInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udpatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    parkPlace?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableEnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE | null
  }

  export type eventsTypeCreateWithoutBuildingIdInput = {
    id?: string
    eventAlias: string
    alias?: scheduleEventCreateNestedManyWithoutAliasInput
  }

  export type eventsTypeUncheckedCreateWithoutBuildingIdInput = {
    id?: string
    eventAlias: string
    alias?: scheduleEventUncheckedCreateNestedManyWithoutAliasInput
  }

  export type eventsTypeCreateOrConnectWithoutBuildingIdInput = {
    where: eventsTypeWhereUniqueInput
    create: XOR<eventsTypeCreateWithoutBuildingIdInput, eventsTypeUncheckedCreateWithoutBuildingIdInput>
  }

  export type eventsTypeCreateManyBuildingIdInputEnvelope = {
    data: Enumerable<eventsTypeCreateManyBuildingIdInput>
  }

  export type eventsTypeUpsertWithWhereUniqueWithoutBuildingIdInput = {
    where: eventsTypeWhereUniqueInput
    update: XOR<eventsTypeUpdateWithoutBuildingIdInput, eventsTypeUncheckedUpdateWithoutBuildingIdInput>
    create: XOR<eventsTypeCreateWithoutBuildingIdInput, eventsTypeUncheckedCreateWithoutBuildingIdInput>
  }

  export type eventsTypeUpdateWithWhereUniqueWithoutBuildingIdInput = {
    where: eventsTypeWhereUniqueInput
    data: XOR<eventsTypeUpdateWithoutBuildingIdInput, eventsTypeUncheckedUpdateWithoutBuildingIdInput>
  }

  export type eventsTypeUpdateManyWithWhereWithoutBuildingIdInput = {
    where: eventsTypeScalarWhereInput
    data: XOR<eventsTypeUpdateManyMutationInput, eventsTypeUncheckedUpdateManyWithoutEventsListInput>
  }

  export type eventsTypeScalarWhereInput = {
    AND?: Enumerable<eventsTypeScalarWhereInput>
    OR?: Enumerable<eventsTypeScalarWhereInput>
    NOT?: Enumerable<eventsTypeScalarWhereInput>
    id?: StringFilter | string
    eventAlias?: StringFilter | string
    buildingEventId?: StringFilter | string
  }

  export type eventsTypeCreateWithoutAliasInput = {
    id?: string
    eventAlias: string
    buildingId: buildingCreateNestedOneWithoutEventsListInput
  }

  export type eventsTypeUncheckedCreateWithoutAliasInput = {
    id?: string
    eventAlias: string
    buildingEventId: string
  }

  export type eventsTypeCreateOrConnectWithoutAliasInput = {
    where: eventsTypeWhereUniqueInput
    create: XOR<eventsTypeCreateWithoutAliasInput, eventsTypeUncheckedCreateWithoutAliasInput>
  }

  export type eventsTypeUpsertWithoutAliasInput = {
    update: XOR<eventsTypeUpdateWithoutAliasInput, eventsTypeUncheckedUpdateWithoutAliasInput>
    create: XOR<eventsTypeCreateWithoutAliasInput, eventsTypeUncheckedCreateWithoutAliasInput>
  }

  export type eventsTypeUpdateWithoutAliasInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    buildingId?: buildingUpdateOneRequiredWithoutEventsListNestedInput
  }

  export type eventsTypeUncheckedUpdateWithoutAliasInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    buildingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type buildingCreateWithoutEventsListInput = {
    id?: string
    v?: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
  }

  export type buildingUncheckedCreateWithoutEventsListInput = {
    id?: string
    v?: number | null
    documentNumber: string
    address: string
    postalCode: string
    owner: string
  }

  export type buildingCreateOrConnectWithoutEventsListInput = {
    where: buildingWhereUniqueInput
    create: XOR<buildingCreateWithoutEventsListInput, buildingUncheckedCreateWithoutEventsListInput>
  }

  export type scheduleEventCreateWithoutAliasInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
  }

  export type scheduleEventUncheckedCreateWithoutAliasInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
  }

  export type scheduleEventCreateOrConnectWithoutAliasInput = {
    where: scheduleEventWhereUniqueInput
    create: XOR<scheduleEventCreateWithoutAliasInput, scheduleEventUncheckedCreateWithoutAliasInput>
  }

  export type scheduleEventCreateManyAliasInputEnvelope = {
    data: Enumerable<scheduleEventCreateManyAliasInput>
  }

  export type buildingUpsertWithoutEventsListInput = {
    update: XOR<buildingUpdateWithoutEventsListInput, buildingUncheckedUpdateWithoutEventsListInput>
    create: XOR<buildingCreateWithoutEventsListInput, buildingUncheckedCreateWithoutEventsListInput>
  }

  export type buildingUpdateWithoutEventsListInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type buildingUncheckedUpdateWithoutEventsListInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    documentNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleEventUpsertWithWhereUniqueWithoutAliasInput = {
    where: scheduleEventWhereUniqueInput
    update: XOR<scheduleEventUpdateWithoutAliasInput, scheduleEventUncheckedUpdateWithoutAliasInput>
    create: XOR<scheduleEventCreateWithoutAliasInput, scheduleEventUncheckedCreateWithoutAliasInput>
  }

  export type scheduleEventUpdateWithWhereUniqueWithoutAliasInput = {
    where: scheduleEventWhereUniqueInput
    data: XOR<scheduleEventUpdateWithoutAliasInput, scheduleEventUncheckedUpdateWithoutAliasInput>
  }

  export type scheduleEventUpdateManyWithWhereWithoutAliasInput = {
    where: scheduleEventScalarWhereInput
    data: XOR<scheduleEventUpdateManyMutationInput, scheduleEventUncheckedUpdateManyWithoutAliasInput>
  }

  export type scheduleEventScalarWhereInput = {
    AND?: Enumerable<scheduleEventScalarWhereInput>
    OR?: Enumerable<scheduleEventScalarWhereInput>
    NOT?: Enumerable<scheduleEventScalarWhereInput>
    id?: StringFilter | string
    v?: IntNullableFilter | number | null
    available?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    dateFrom?: DateTimeFilter | Date | string
    dateTo?: DateTimeFilter | Date | string
    location?: StringFilter | string
    timeFrom?: StringFilter | string
    timeTo?: StringFilter | string
    userId?: StringFilter | string
    guestsList?: StringNullableListFilter
    eventTitle?: StringFilter | string
  }

  export type syndicCreateManyUserInput = {
    id?: string
    v?: number | null
    publicPhoneNumber: string
    publicEmail: string
  }

  export type syndicUpdateWithoutUserInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type syndicUncheckedUpdateWithoutUserInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type syndicUncheckedUpdateManyWithoutSyndicInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    publicPhoneNumber?: StringFieldUpdateOperationsInput | string
    publicEmail?: StringFieldUpdateOperationsInput | string
  }

  export type eventsTypeCreateManyBuildingIdInput = {
    id?: string
    eventAlias: string
  }

  export type eventsTypeUpdateWithoutBuildingIdInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    alias?: scheduleEventUpdateManyWithoutAliasNestedInput
  }

  export type eventsTypeUncheckedUpdateWithoutBuildingIdInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
    alias?: scheduleEventUncheckedUpdateManyWithoutAliasNestedInput
  }

  export type eventsTypeUncheckedUpdateManyWithoutEventsListInput = {
    eventAlias?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleEventCreateManyAliasInput = {
    id?: string
    v?: number | null
    available: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dateFrom: Date | string
    dateTo?: Date | string
    location: string
    timeFrom: string
    timeTo: string
    userId: string
    guestsList?: scheduleEventCreateguestsListInput | Enumerable<string>
  }

  export type scheduleEventUpdateWithoutAliasInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
  }

  export type scheduleEventUncheckedUpdateWithoutAliasInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
  }

  export type scheduleEventUncheckedUpdateManyWithoutAliasInput = {
    v?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    timeFrom?: StringFieldUpdateOperationsInput | string
    timeTo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guestsList?: scheduleEventUpdateguestsListInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}