
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BuildingScalarFieldEnum = makeEnum({
  id: 'id',
  v: 'v',
  documentNumber: 'documentNumber',
  address: 'address',
  postalCode: 'postalCode',
  owner: 'owner'
});

exports.Prisma.EmployeeScalarFieldEnum = makeEnum({
  id: 'id',
  v: 'v',
  name: 'name',
  documentNumber: 'documentNumber',
  role: 'role',
  accessLevel: 'accessLevel',
  pictureId: 'pictureId',
  company: 'company',
  companyDocumentNumber: 'companyDocumentNumber'
});

exports.Prisma.EventsTypeScalarFieldEnum = makeEnum({
  id: 'id',
  eventAlias: 'eventAlias',
  buildingEventId: 'buildingEventId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ScheduleEventScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SyndicScalarFieldEnum = makeEnum({
  id: 'id',
  v: 'v',
  syndicId: 'syndicId',
  publicPhoneNumber: 'publicPhoneNumber',
  publicEmail: 'publicEmail'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
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
});
exports.JOB_ROLE = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN',
  SYNDIC: 'SYNDIC',
  EMPLOYEE: 'EMPLOYEE'
});

exports.USER_PROFILE = makeEnum({
  OWNER: 'OWNER',
  CONDOMINUM: 'CONDOMINUM',
  SYNDIC: 'SYNDIC',
  EMPLOYEE: 'EMPLOYEE',
  OTHER: 'OTHER'
});

exports.Prisma.ModelName = makeEnum({
  users: 'users',
  syndic: 'syndic',
  building: 'building',
  employee: 'employee',
  scheduleEvent: 'scheduleEvent',
  eventsType: 'eventsType'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
