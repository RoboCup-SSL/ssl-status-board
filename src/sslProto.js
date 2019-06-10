/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * Team enum.
 * @exports Team
 * @enum {string}
 * @property {number} UNKNOWN=0 UNKNOWN value
 * @property {number} YELLOW=1 YELLOW value
 * @property {number} BLUE=2 BLUE value
 */
$root.Team = (function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[1] = "YELLOW"] = 1;
    values[valuesById[2] = "BLUE"] = 2;
    return values;
})();

export const BotId = $root.BotId = (() => {

    /**
     * Properties of a BotId.
     * @exports IBotId
     * @interface IBotId
     * @property {number|null} [id] BotId id
     * @property {Team|null} [team] BotId team
     */

    /**
     * Constructs a new BotId.
     * @exports BotId
     * @classdesc Represents a BotId.
     * @implements IBotId
     * @constructor
     * @param {IBotId=} [properties] Properties to set
     */
    function BotId(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BotId id.
     * @member {number} id
     * @memberof BotId
     * @instance
     */
    BotId.prototype.id = 0;

    /**
     * BotId team.
     * @member {Team} team
     * @memberof BotId
     * @instance
     */
    BotId.prototype.team = 0;

    /**
     * Creates a new BotId instance using the specified properties.
     * @function create
     * @memberof BotId
     * @static
     * @param {IBotId=} [properties] Properties to set
     * @returns {BotId} BotId instance
     */
    BotId.create = function create(properties) {
        return new BotId(properties);
    };

    /**
     * Encodes the specified BotId message. Does not implicitly {@link BotId.verify|verify} messages.
     * @function encode
     * @memberof BotId
     * @static
     * @param {IBotId} message BotId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BotId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.team != null && message.hasOwnProperty("team"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.team);
        return writer;
    };

    /**
     * Encodes the specified BotId message, length delimited. Does not implicitly {@link BotId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BotId
     * @static
     * @param {IBotId} message BotId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BotId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BotId message from the specified reader or buffer.
     * @function decode
     * @memberof BotId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BotId} BotId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BotId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BotId();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.team = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BotId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BotId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BotId} BotId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BotId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BotId message.
     * @function verify
     * @memberof BotId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BotId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.team != null && message.hasOwnProperty("team"))
            switch (message.team) {
            default:
                return "team: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a BotId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BotId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BotId} BotId
     */
    BotId.fromObject = function fromObject(object) {
        if (object instanceof $root.BotId)
            return object;
        let message = new $root.BotId();
        if (object.id != null)
            message.id = object.id | 0;
        switch (object.team) {
        case "UNKNOWN":
        case 0:
            message.team = 0;
            break;
        case "YELLOW":
        case 1:
            message.team = 1;
            break;
        case "BLUE":
        case 2:
            message.team = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a BotId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BotId
     * @static
     * @param {BotId} message BotId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BotId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = 0;
            object.team = options.enums === String ? "UNKNOWN" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.team != null && message.hasOwnProperty("team"))
            object.team = options.enums === String ? $root.Team[message.team] : message.team;
        return object;
    };

    /**
     * Converts this BotId to JSON.
     * @function toJSON
     * @memberof BotId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BotId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BotId;
})();

export const Location = $root.Location = (() => {

    /**
     * Properties of a Location.
     * @exports ILocation
     * @interface ILocation
     * @property {number} x Location x
     * @property {number} y Location y
     */

    /**
     * Constructs a new Location.
     * @exports Location
     * @classdesc Represents a Location.
     * @implements ILocation
     * @constructor
     * @param {ILocation=} [properties] Properties to set
     */
    function Location(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Location x.
     * @member {number} x
     * @memberof Location
     * @instance
     */
    Location.prototype.x = 0;

    /**
     * Location y.
     * @member {number} y
     * @memberof Location
     * @instance
     */
    Location.prototype.y = 0;

    /**
     * Creates a new Location instance using the specified properties.
     * @function create
     * @memberof Location
     * @static
     * @param {ILocation=} [properties] Properties to set
     * @returns {Location} Location instance
     */
    Location.create = function create(properties) {
        return new Location(properties);
    };

    /**
     * Encodes the specified Location message. Does not implicitly {@link Location.verify|verify} messages.
     * @function encode
     * @memberof Location
     * @static
     * @param {ILocation} message Location message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Location.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        return writer;
    };

    /**
     * Encodes the specified Location message, length delimited. Does not implicitly {@link Location.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Location
     * @static
     * @param {ILocation} message Location message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Location.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Location message from the specified reader or buffer.
     * @function decode
     * @memberof Location
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Location} Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Location.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Location();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.float();
                break;
            case 2:
                message.y = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("x"))
            throw $util.ProtocolError("missing required 'x'", { instance: message });
        if (!message.hasOwnProperty("y"))
            throw $util.ProtocolError("missing required 'y'", { instance: message });
        return message;
    };

    /**
     * Decodes a Location message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Location
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Location} Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Location.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Location message.
     * @function verify
     * @memberof Location
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Location.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (typeof message.x !== "number")
            return "x: number expected";
        if (typeof message.y !== "number")
            return "y: number expected";
        return null;
    };

    /**
     * Creates a Location message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Location
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Location} Location
     */
    Location.fromObject = function fromObject(object) {
        if (object instanceof $root.Location)
            return object;
        let message = new $root.Location();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a Location message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Location
     * @static
     * @param {Location} message Location
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Location.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this Location to JSON.
     * @function toJSON
     * @memberof Location
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Location.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Location;
})();

export const ControllerReply = $root.ControllerReply = (() => {

    /**
     * Properties of a ControllerReply.
     * @exports IControllerReply
     * @interface IControllerReply
     * @property {ControllerReply.StatusCode|null} [statusCode] ControllerReply statusCode
     * @property {string|null} [reason] ControllerReply reason
     * @property {string|null} [nextToken] ControllerReply nextToken
     * @property {ControllerReply.Verification|null} [verification] ControllerReply verification
     */

    /**
     * Constructs a new ControllerReply.
     * @exports ControllerReply
     * @classdesc Represents a ControllerReply.
     * @implements IControllerReply
     * @constructor
     * @param {IControllerReply=} [properties] Properties to set
     */
    function ControllerReply(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ControllerReply statusCode.
     * @member {ControllerReply.StatusCode} statusCode
     * @memberof ControllerReply
     * @instance
     */
    ControllerReply.prototype.statusCode = 0;

    /**
     * ControllerReply reason.
     * @member {string} reason
     * @memberof ControllerReply
     * @instance
     */
    ControllerReply.prototype.reason = "";

    /**
     * ControllerReply nextToken.
     * @member {string} nextToken
     * @memberof ControllerReply
     * @instance
     */
    ControllerReply.prototype.nextToken = "";

    /**
     * ControllerReply verification.
     * @member {ControllerReply.Verification} verification
     * @memberof ControllerReply
     * @instance
     */
    ControllerReply.prototype.verification = 0;

    /**
     * Creates a new ControllerReply instance using the specified properties.
     * @function create
     * @memberof ControllerReply
     * @static
     * @param {IControllerReply=} [properties] Properties to set
     * @returns {ControllerReply} ControllerReply instance
     */
    ControllerReply.create = function create(properties) {
        return new ControllerReply(properties);
    };

    /**
     * Encodes the specified ControllerReply message. Does not implicitly {@link ControllerReply.verify|verify} messages.
     * @function encode
     * @memberof ControllerReply
     * @static
     * @param {IControllerReply} message ControllerReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControllerReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.statusCode != null && message.hasOwnProperty("statusCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.statusCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
        if (message.nextToken != null && message.hasOwnProperty("nextToken"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nextToken);
        if (message.verification != null && message.hasOwnProperty("verification"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.verification);
        return writer;
    };

    /**
     * Encodes the specified ControllerReply message, length delimited. Does not implicitly {@link ControllerReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ControllerReply
     * @static
     * @param {IControllerReply} message ControllerReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControllerReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ControllerReply message from the specified reader or buffer.
     * @function decode
     * @memberof ControllerReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ControllerReply} ControllerReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControllerReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControllerReply();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.statusCode = reader.int32();
                break;
            case 2:
                message.reason = reader.string();
                break;
            case 3:
                message.nextToken = reader.string();
                break;
            case 4:
                message.verification = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ControllerReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ControllerReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ControllerReply} ControllerReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControllerReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ControllerReply message.
     * @function verify
     * @memberof ControllerReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ControllerReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.statusCode != null && message.hasOwnProperty("statusCode"))
            switch (message.statusCode) {
            default:
                return "statusCode: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.nextToken != null && message.hasOwnProperty("nextToken"))
            if (!$util.isString(message.nextToken))
                return "nextToken: string expected";
        if (message.verification != null && message.hasOwnProperty("verification"))
            switch (message.verification) {
            default:
                return "verification: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a ControllerReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ControllerReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ControllerReply} ControllerReply
     */
    ControllerReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ControllerReply)
            return object;
        let message = new $root.ControllerReply();
        switch (object.statusCode) {
        case "UNKNOWN_STATUS_CODE":
        case 0:
            message.statusCode = 0;
            break;
        case "OK":
        case 1:
            message.statusCode = 1;
            break;
        case "REJECTED":
        case 2:
            message.statusCode = 2;
            break;
        }
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.nextToken != null)
            message.nextToken = String(object.nextToken);
        switch (object.verification) {
        case "UNKNOWN_VERIFICATION":
        case 0:
            message.verification = 0;
            break;
        case "VERIFIED":
        case 1:
            message.verification = 1;
            break;
        case "UNVERIFIED":
        case 2:
            message.verification = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ControllerReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ControllerReply
     * @static
     * @param {ControllerReply} message ControllerReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ControllerReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.statusCode = options.enums === String ? "UNKNOWN_STATUS_CODE" : 0;
            object.reason = "";
            object.nextToken = "";
            object.verification = options.enums === String ? "UNKNOWN_VERIFICATION" : 0;
        }
        if (message.statusCode != null && message.hasOwnProperty("statusCode"))
            object.statusCode = options.enums === String ? $root.ControllerReply.StatusCode[message.statusCode] : message.statusCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.nextToken != null && message.hasOwnProperty("nextToken"))
            object.nextToken = message.nextToken;
        if (message.verification != null && message.hasOwnProperty("verification"))
            object.verification = options.enums === String ? $root.ControllerReply.Verification[message.verification] : message.verification;
        return object;
    };

    /**
     * Converts this ControllerReply to JSON.
     * @function toJSON
     * @memberof ControllerReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ControllerReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * StatusCode enum.
     * @name ControllerReply.StatusCode
     * @enum {string}
     * @property {number} UNKNOWN_STATUS_CODE=0 UNKNOWN_STATUS_CODE value
     * @property {number} OK=1 OK value
     * @property {number} REJECTED=2 REJECTED value
     */
    ControllerReply.StatusCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_STATUS_CODE"] = 0;
        values[valuesById[1] = "OK"] = 1;
        values[valuesById[2] = "REJECTED"] = 2;
        return values;
    })();

    /**
     * Verification enum.
     * @name ControllerReply.Verification
     * @enum {string}
     * @property {number} UNKNOWN_VERIFICATION=0 UNKNOWN_VERIFICATION value
     * @property {number} VERIFIED=1 VERIFIED value
     * @property {number} UNVERIFIED=2 UNVERIFIED value
     */
    ControllerReply.Verification = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_VERIFICATION"] = 0;
        values[valuesById[1] = "VERIFIED"] = 1;
        values[valuesById[2] = "UNVERIFIED"] = 2;
        return values;
    })();

    return ControllerReply;
})();

export const Signature = $root.Signature = (() => {

    /**
     * Properties of a Signature.
     * @exports ISignature
     * @interface ISignature
     * @property {string} token Signature token
     * @property {Uint8Array} pkcs1v15 Signature pkcs1v15
     */

    /**
     * Constructs a new Signature.
     * @exports Signature
     * @classdesc Represents a Signature.
     * @implements ISignature
     * @constructor
     * @param {ISignature=} [properties] Properties to set
     */
    function Signature(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Signature token.
     * @member {string} token
     * @memberof Signature
     * @instance
     */
    Signature.prototype.token = "";

    /**
     * Signature pkcs1v15.
     * @member {Uint8Array} pkcs1v15
     * @memberof Signature
     * @instance
     */
    Signature.prototype.pkcs1v15 = $util.newBuffer([]);

    /**
     * Creates a new Signature instance using the specified properties.
     * @function create
     * @memberof Signature
     * @static
     * @param {ISignature=} [properties] Properties to set
     * @returns {Signature} Signature instance
     */
    Signature.create = function create(properties) {
        return new Signature(properties);
    };

    /**
     * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encode
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signature.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.pkcs1v15);
        return writer;
    };

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @function decode
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Signature} Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Signature();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.pkcs1v15 = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: message });
        if (!message.hasOwnProperty("pkcs1v15"))
            throw $util.ProtocolError("missing required 'pkcs1v15'", { instance: message });
        return message;
    };

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Signature} Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Signature message.
     * @function verify
     * @memberof Signature
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Signature.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.token))
            return "token: string expected";
        if (!(message.pkcs1v15 && typeof message.pkcs1v15.length === "number" || $util.isString(message.pkcs1v15)))
            return "pkcs1v15: buffer expected";
        return null;
    };

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Signature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Signature} Signature
     */
    Signature.fromObject = function fromObject(object) {
        if (object instanceof $root.Signature)
            return object;
        let message = new $root.Signature();
        if (object.token != null)
            message.token = String(object.token);
        if (object.pkcs1v15 != null)
            if (typeof object.pkcs1v15 === "string")
                $util.base64.decode(object.pkcs1v15, message.pkcs1v15 = $util.newBuffer($util.base64.length(object.pkcs1v15)), 0);
            else if (object.pkcs1v15.length)
                message.pkcs1v15 = object.pkcs1v15;
        return message;
    };

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Signature
     * @static
     * @param {Signature} message Signature
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Signature.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.token = "";
            if (options.bytes === String)
                object.pkcs1v15 = "";
            else {
                object.pkcs1v15 = [];
                if (options.bytes !== Array)
                    object.pkcs1v15 = $util.newBuffer(object.pkcs1v15);
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.pkcs1v15 != null && message.hasOwnProperty("pkcs1v15"))
            object.pkcs1v15 = options.bytes === String ? $util.base64.encode(message.pkcs1v15, 0, message.pkcs1v15.length) : options.bytes === Array ? Array.prototype.slice.call(message.pkcs1v15) : message.pkcs1v15;
        return object;
    };

    /**
     * Converts this Signature to JSON.
     * @function toJSON
     * @memberof Signature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Signature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Signature;
})();

export const BallSpeedMeasurement = $root.BallSpeedMeasurement = (() => {

    /**
     * Properties of a BallSpeedMeasurement.
     * @exports IBallSpeedMeasurement
     * @interface IBallSpeedMeasurement
     * @property {number|Long} timestamp BallSpeedMeasurement timestamp
     * @property {number} ballSpeed BallSpeedMeasurement ballSpeed
     * @property {number|null} [initialBallSpeed] BallSpeedMeasurement initialBallSpeed
     */

    /**
     * Constructs a new BallSpeedMeasurement.
     * @exports BallSpeedMeasurement
     * @classdesc Represents a BallSpeedMeasurement.
     * @implements IBallSpeedMeasurement
     * @constructor
     * @param {IBallSpeedMeasurement=} [properties] Properties to set
     */
    function BallSpeedMeasurement(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BallSpeedMeasurement timestamp.
     * @member {number|Long} timestamp
     * @memberof BallSpeedMeasurement
     * @instance
     */
    BallSpeedMeasurement.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * BallSpeedMeasurement ballSpeed.
     * @member {number} ballSpeed
     * @memberof BallSpeedMeasurement
     * @instance
     */
    BallSpeedMeasurement.prototype.ballSpeed = 0;

    /**
     * BallSpeedMeasurement initialBallSpeed.
     * @member {number} initialBallSpeed
     * @memberof BallSpeedMeasurement
     * @instance
     */
    BallSpeedMeasurement.prototype.initialBallSpeed = 0;

    /**
     * Creates a new BallSpeedMeasurement instance using the specified properties.
     * @function create
     * @memberof BallSpeedMeasurement
     * @static
     * @param {IBallSpeedMeasurement=} [properties] Properties to set
     * @returns {BallSpeedMeasurement} BallSpeedMeasurement instance
     */
    BallSpeedMeasurement.create = function create(properties) {
        return new BallSpeedMeasurement(properties);
    };

    /**
     * Encodes the specified BallSpeedMeasurement message. Does not implicitly {@link BallSpeedMeasurement.verify|verify} messages.
     * @function encode
     * @memberof BallSpeedMeasurement
     * @static
     * @param {IBallSpeedMeasurement} message BallSpeedMeasurement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BallSpeedMeasurement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        writer.uint32(/* id 2, wireType 5 =*/21).float(message.ballSpeed);
        if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.initialBallSpeed);
        return writer;
    };

    /**
     * Encodes the specified BallSpeedMeasurement message, length delimited. Does not implicitly {@link BallSpeedMeasurement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BallSpeedMeasurement
     * @static
     * @param {IBallSpeedMeasurement} message BallSpeedMeasurement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BallSpeedMeasurement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BallSpeedMeasurement message from the specified reader or buffer.
     * @function decode
     * @memberof BallSpeedMeasurement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BallSpeedMeasurement} BallSpeedMeasurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BallSpeedMeasurement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BallSpeedMeasurement();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.uint64();
                break;
            case 2:
                message.ballSpeed = reader.float();
                break;
            case 3:
                message.initialBallSpeed = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        if (!message.hasOwnProperty("ballSpeed"))
            throw $util.ProtocolError("missing required 'ballSpeed'", { instance: message });
        return message;
    };

    /**
     * Decodes a BallSpeedMeasurement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BallSpeedMeasurement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BallSpeedMeasurement} BallSpeedMeasurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BallSpeedMeasurement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BallSpeedMeasurement message.
     * @function verify
     * @memberof BallSpeedMeasurement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BallSpeedMeasurement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
            return "timestamp: integer|Long expected";
        if (typeof message.ballSpeed !== "number")
            return "ballSpeed: number expected";
        if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
            if (typeof message.initialBallSpeed !== "number")
                return "initialBallSpeed: number expected";
        return null;
    };

    /**
     * Creates a BallSpeedMeasurement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BallSpeedMeasurement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BallSpeedMeasurement} BallSpeedMeasurement
     */
    BallSpeedMeasurement.fromObject = function fromObject(object) {
        if (object instanceof $root.BallSpeedMeasurement)
            return object;
        let message = new $root.BallSpeedMeasurement();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.ballSpeed != null)
            message.ballSpeed = Number(object.ballSpeed);
        if (object.initialBallSpeed != null)
            message.initialBallSpeed = Number(object.initialBallSpeed);
        return message;
    };

    /**
     * Creates a plain object from a BallSpeedMeasurement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BallSpeedMeasurement
     * @static
     * @param {BallSpeedMeasurement} message BallSpeedMeasurement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BallSpeedMeasurement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.ballSpeed = 0;
            object.initialBallSpeed = 0;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.ballSpeed != null && message.hasOwnProperty("ballSpeed"))
            object.ballSpeed = options.json && !isFinite(message.ballSpeed) ? String(message.ballSpeed) : message.ballSpeed;
        if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
            object.initialBallSpeed = options.json && !isFinite(message.initialBallSpeed) ? String(message.initialBallSpeed) : message.initialBallSpeed;
        return object;
    };

    /**
     * Converts this BallSpeedMeasurement to JSON.
     * @function toJSON
     * @memberof BallSpeedMeasurement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BallSpeedMeasurement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BallSpeedMeasurement;
})();

export const GameEvent = $root.GameEvent = (() => {

    /**
     * Properties of a GameEvent.
     * @exports IGameEvent
     * @interface IGameEvent
     * @property {GameEventType} type GameEvent type
     * @property {Array.<string>|null} [origin] GameEvent origin
     * @property {GameEvent.IPrepared|null} [prepared] GameEvent prepared
     * @property {GameEvent.INoProgressInGame|null} [noProgressInGame] GameEvent noProgressInGame
     * @property {GameEvent.IPlacementFailed|null} [placementFailed] GameEvent placementFailed
     * @property {GameEvent.IPlacementSucceeded|null} [placementSucceeded] GameEvent placementSucceeded
     * @property {GameEvent.IBotSubstitution|null} [botSubstitution] GameEvent botSubstitution
     * @property {GameEvent.ITooManyRobots|null} [tooManyRobots] GameEvent tooManyRobots
     * @property {GameEvent.IBallLeftField|null} [ballLeftFieldTouchLine] GameEvent ballLeftFieldTouchLine
     * @property {GameEvent.IBallLeftField|null} [ballLeftFieldGoalLine] GameEvent ballLeftFieldGoalLine
     * @property {GameEvent.IGoal|null} [possibleGoal] GameEvent possibleGoal
     * @property {GameEvent.IGoal|null} [goal] GameEvent goal
     * @property {GameEvent.IIndirectGoal|null} [indirectGoal] GameEvent indirectGoal
     * @property {GameEvent.IChippedGoal|null} [chippedGoal] GameEvent chippedGoal
     * @property {GameEvent.IAimlessKick|null} [aimlessKick] GameEvent aimlessKick
     * @property {GameEvent.IKickTimeout|null} [kickTimeout] GameEvent kickTimeout
     * @property {GameEvent.IKeeperHeldBall|null} [keeperHeldBall] GameEvent keeperHeldBall
     * @property {GameEvent.IAttackerDoubleTouchedBall|null} [attackerDoubleTouchedBall] GameEvent attackerDoubleTouchedBall
     * @property {GameEvent.IAttackerTouchedBallInDefenseArea|null} [attackerTouchedBallInDefenseArea] GameEvent attackerTouchedBallInDefenseArea
     * @property {GameEvent.IAttackerTouchedOpponentInDefenseArea|null} [attackerTouchedOpponentInDefenseArea] GameEvent attackerTouchedOpponentInDefenseArea
     * @property {GameEvent.IAttackerTouchedOpponentInDefenseArea|null} [attackerTouchedOpponentInDefenseAreaSkipped] GameEvent attackerTouchedOpponentInDefenseAreaSkipped
     * @property {GameEvent.IBotDribbledBallTooFar|null} [botDribbledBallTooFar] GameEvent botDribbledBallTooFar
     * @property {GameEvent.IBotKickedBallTooFast|null} [botKickedBallTooFast] GameEvent botKickedBallTooFast
     * @property {GameEvent.IAttackerTooCloseToDefenseArea|null} [attackerTooCloseToDefenseArea] GameEvent attackerTooCloseToDefenseArea
     * @property {GameEvent.IBotInterferedPlacement|null} [botInterferedPlacement] GameEvent botInterferedPlacement
     * @property {GameEvent.IBotCrashDrawn|null} [botCrashDrawn] GameEvent botCrashDrawn
     * @property {GameEvent.IBotCrashUnique|null} [botCrashUnique] GameEvent botCrashUnique
     * @property {GameEvent.IBotCrashUnique|null} [botCrashUniqueSkipped] GameEvent botCrashUniqueSkipped
     * @property {GameEvent.IBotPushedBot|null} [botPushedBot] GameEvent botPushedBot
     * @property {GameEvent.IBotPushedBot|null} [botPushedBotSkipped] GameEvent botPushedBotSkipped
     * @property {GameEvent.IBotHeldBallDeliberately|null} [botHeldBallDeliberately] GameEvent botHeldBallDeliberately
     * @property {GameEvent.IBotTippedOver|null} [botTippedOver] GameEvent botTippedOver
     * @property {GameEvent.IBotTooFastInStop|null} [botTooFastInStop] GameEvent botTooFastInStop
     * @property {GameEvent.IDefenderTooCloseToKickPoint|null} [defenderTooCloseToKickPoint] GameEvent defenderTooCloseToKickPoint
     * @property {GameEvent.IDefenderInDefenseAreaPartially|null} [defenderInDefenseAreaPartially] GameEvent defenderInDefenseAreaPartially
     * @property {GameEvent.IDefenderInDefenseArea|null} [defenderInDefenseArea] GameEvent defenderInDefenseArea
     * @property {GameEvent.IMultipleCards|null} [multipleCards] GameEvent multipleCards
     * @property {GameEvent.IMultiplePlacementFailures|null} [multiplePlacementFailures] GameEvent multiplePlacementFailures
     * @property {GameEvent.IMultipleFouls|null} [multipleFouls] GameEvent multipleFouls
     * @property {GameEvent.IUnsportingBehaviorMinor|null} [unsportingBehaviorMinor] GameEvent unsportingBehaviorMinor
     * @property {GameEvent.IUnsportingBehaviorMajor|null} [unsportingBehaviorMajor] GameEvent unsportingBehaviorMajor
     */

    /**
     * Constructs a new GameEvent.
     * @exports GameEvent
     * @classdesc Represents a GameEvent.
     * @implements IGameEvent
     * @constructor
     * @param {IGameEvent=} [properties] Properties to set
     */
    function GameEvent(properties) {
        this.origin = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameEvent type.
     * @member {GameEventType} type
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.type = 0;

    /**
     * GameEvent origin.
     * @member {Array.<string>} origin
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.origin = $util.emptyArray;

    /**
     * GameEvent prepared.
     * @member {GameEvent.IPrepared|null|undefined} prepared
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.prepared = null;

    /**
     * GameEvent noProgressInGame.
     * @member {GameEvent.INoProgressInGame|null|undefined} noProgressInGame
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.noProgressInGame = null;

    /**
     * GameEvent placementFailed.
     * @member {GameEvent.IPlacementFailed|null|undefined} placementFailed
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.placementFailed = null;

    /**
     * GameEvent placementSucceeded.
     * @member {GameEvent.IPlacementSucceeded|null|undefined} placementSucceeded
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.placementSucceeded = null;

    /**
     * GameEvent botSubstitution.
     * @member {GameEvent.IBotSubstitution|null|undefined} botSubstitution
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botSubstitution = null;

    /**
     * GameEvent tooManyRobots.
     * @member {GameEvent.ITooManyRobots|null|undefined} tooManyRobots
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.tooManyRobots = null;

    /**
     * GameEvent ballLeftFieldTouchLine.
     * @member {GameEvent.IBallLeftField|null|undefined} ballLeftFieldTouchLine
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.ballLeftFieldTouchLine = null;

    /**
     * GameEvent ballLeftFieldGoalLine.
     * @member {GameEvent.IBallLeftField|null|undefined} ballLeftFieldGoalLine
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.ballLeftFieldGoalLine = null;

    /**
     * GameEvent possibleGoal.
     * @member {GameEvent.IGoal|null|undefined} possibleGoal
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.possibleGoal = null;

    /**
     * GameEvent goal.
     * @member {GameEvent.IGoal|null|undefined} goal
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.goal = null;

    /**
     * GameEvent indirectGoal.
     * @member {GameEvent.IIndirectGoal|null|undefined} indirectGoal
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.indirectGoal = null;

    /**
     * GameEvent chippedGoal.
     * @member {GameEvent.IChippedGoal|null|undefined} chippedGoal
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.chippedGoal = null;

    /**
     * GameEvent aimlessKick.
     * @member {GameEvent.IAimlessKick|null|undefined} aimlessKick
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.aimlessKick = null;

    /**
     * GameEvent kickTimeout.
     * @member {GameEvent.IKickTimeout|null|undefined} kickTimeout
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.kickTimeout = null;

    /**
     * GameEvent keeperHeldBall.
     * @member {GameEvent.IKeeperHeldBall|null|undefined} keeperHeldBall
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.keeperHeldBall = null;

    /**
     * GameEvent attackerDoubleTouchedBall.
     * @member {GameEvent.IAttackerDoubleTouchedBall|null|undefined} attackerDoubleTouchedBall
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.attackerDoubleTouchedBall = null;

    /**
     * GameEvent attackerTouchedBallInDefenseArea.
     * @member {GameEvent.IAttackerTouchedBallInDefenseArea|null|undefined} attackerTouchedBallInDefenseArea
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.attackerTouchedBallInDefenseArea = null;

    /**
     * GameEvent attackerTouchedOpponentInDefenseArea.
     * @member {GameEvent.IAttackerTouchedOpponentInDefenseArea|null|undefined} attackerTouchedOpponentInDefenseArea
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.attackerTouchedOpponentInDefenseArea = null;

    /**
     * GameEvent attackerTouchedOpponentInDefenseAreaSkipped.
     * @member {GameEvent.IAttackerTouchedOpponentInDefenseArea|null|undefined} attackerTouchedOpponentInDefenseAreaSkipped
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.attackerTouchedOpponentInDefenseAreaSkipped = null;

    /**
     * GameEvent botDribbledBallTooFar.
     * @member {GameEvent.IBotDribbledBallTooFar|null|undefined} botDribbledBallTooFar
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botDribbledBallTooFar = null;

    /**
     * GameEvent botKickedBallTooFast.
     * @member {GameEvent.IBotKickedBallTooFast|null|undefined} botKickedBallTooFast
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botKickedBallTooFast = null;

    /**
     * GameEvent attackerTooCloseToDefenseArea.
     * @member {GameEvent.IAttackerTooCloseToDefenseArea|null|undefined} attackerTooCloseToDefenseArea
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.attackerTooCloseToDefenseArea = null;

    /**
     * GameEvent botInterferedPlacement.
     * @member {GameEvent.IBotInterferedPlacement|null|undefined} botInterferedPlacement
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botInterferedPlacement = null;

    /**
     * GameEvent botCrashDrawn.
     * @member {GameEvent.IBotCrashDrawn|null|undefined} botCrashDrawn
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botCrashDrawn = null;

    /**
     * GameEvent botCrashUnique.
     * @member {GameEvent.IBotCrashUnique|null|undefined} botCrashUnique
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botCrashUnique = null;

    /**
     * GameEvent botCrashUniqueSkipped.
     * @member {GameEvent.IBotCrashUnique|null|undefined} botCrashUniqueSkipped
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botCrashUniqueSkipped = null;

    /**
     * GameEvent botPushedBot.
     * @member {GameEvent.IBotPushedBot|null|undefined} botPushedBot
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botPushedBot = null;

    /**
     * GameEvent botPushedBotSkipped.
     * @member {GameEvent.IBotPushedBot|null|undefined} botPushedBotSkipped
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botPushedBotSkipped = null;

    /**
     * GameEvent botHeldBallDeliberately.
     * @member {GameEvent.IBotHeldBallDeliberately|null|undefined} botHeldBallDeliberately
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botHeldBallDeliberately = null;

    /**
     * GameEvent botTippedOver.
     * @member {GameEvent.IBotTippedOver|null|undefined} botTippedOver
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botTippedOver = null;

    /**
     * GameEvent botTooFastInStop.
     * @member {GameEvent.IBotTooFastInStop|null|undefined} botTooFastInStop
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.botTooFastInStop = null;

    /**
     * GameEvent defenderTooCloseToKickPoint.
     * @member {GameEvent.IDefenderTooCloseToKickPoint|null|undefined} defenderTooCloseToKickPoint
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.defenderTooCloseToKickPoint = null;

    /**
     * GameEvent defenderInDefenseAreaPartially.
     * @member {GameEvent.IDefenderInDefenseAreaPartially|null|undefined} defenderInDefenseAreaPartially
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.defenderInDefenseAreaPartially = null;

    /**
     * GameEvent defenderInDefenseArea.
     * @member {GameEvent.IDefenderInDefenseArea|null|undefined} defenderInDefenseArea
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.defenderInDefenseArea = null;

    /**
     * GameEvent multipleCards.
     * @member {GameEvent.IMultipleCards|null|undefined} multipleCards
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.multipleCards = null;

    /**
     * GameEvent multiplePlacementFailures.
     * @member {GameEvent.IMultiplePlacementFailures|null|undefined} multiplePlacementFailures
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.multiplePlacementFailures = null;

    /**
     * GameEvent multipleFouls.
     * @member {GameEvent.IMultipleFouls|null|undefined} multipleFouls
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.multipleFouls = null;

    /**
     * GameEvent unsportingBehaviorMinor.
     * @member {GameEvent.IUnsportingBehaviorMinor|null|undefined} unsportingBehaviorMinor
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.unsportingBehaviorMinor = null;

    /**
     * GameEvent unsportingBehaviorMajor.
     * @member {GameEvent.IUnsportingBehaviorMajor|null|undefined} unsportingBehaviorMajor
     * @memberof GameEvent
     * @instance
     */
    GameEvent.prototype.unsportingBehaviorMajor = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * GameEvent event.
     * @member {"prepared"|"noProgressInGame"|"placementFailed"|"placementSucceeded"|"botSubstitution"|"tooManyRobots"|"ballLeftFieldTouchLine"|"ballLeftFieldGoalLine"|"possibleGoal"|"goal"|"indirectGoal"|"chippedGoal"|"aimlessKick"|"kickTimeout"|"keeperHeldBall"|"attackerDoubleTouchedBall"|"attackerTouchedBallInDefenseArea"|"attackerTouchedOpponentInDefenseArea"|"attackerTouchedOpponentInDefenseAreaSkipped"|"botDribbledBallTooFar"|"botKickedBallTooFast"|"attackerTooCloseToDefenseArea"|"botInterferedPlacement"|"botCrashDrawn"|"botCrashUnique"|"botCrashUniqueSkipped"|"botPushedBot"|"botPushedBotSkipped"|"botHeldBallDeliberately"|"botTippedOver"|"botTooFastInStop"|"defenderTooCloseToKickPoint"|"defenderInDefenseAreaPartially"|"defenderInDefenseArea"|"multipleCards"|"multiplePlacementFailures"|"multipleFouls"|"unsportingBehaviorMinor"|"unsportingBehaviorMajor"|undefined} event
     * @memberof GameEvent
     * @instance
     */
    Object.defineProperty(GameEvent.prototype, "event", {
        get: $util.oneOfGetter($oneOfFields = ["prepared", "noProgressInGame", "placementFailed", "placementSucceeded", "botSubstitution", "tooManyRobots", "ballLeftFieldTouchLine", "ballLeftFieldGoalLine", "possibleGoal", "goal", "indirectGoal", "chippedGoal", "aimlessKick", "kickTimeout", "keeperHeldBall", "attackerDoubleTouchedBall", "attackerTouchedBallInDefenseArea", "attackerTouchedOpponentInDefenseArea", "attackerTouchedOpponentInDefenseAreaSkipped", "botDribbledBallTooFar", "botKickedBallTooFast", "attackerTooCloseToDefenseArea", "botInterferedPlacement", "botCrashDrawn", "botCrashUnique", "botCrashUniqueSkipped", "botPushedBot", "botPushedBotSkipped", "botHeldBallDeliberately", "botTippedOver", "botTooFastInStop", "defenderTooCloseToKickPoint", "defenderInDefenseAreaPartially", "defenderInDefenseArea", "multipleCards", "multiplePlacementFailures", "multipleFouls", "unsportingBehaviorMinor", "unsportingBehaviorMajor"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GameEvent instance using the specified properties.
     * @function create
     * @memberof GameEvent
     * @static
     * @param {IGameEvent=} [properties] Properties to set
     * @returns {GameEvent} GameEvent instance
     */
    GameEvent.create = function create(properties) {
        return new GameEvent(properties);
    };

    /**
     * Encodes the specified GameEvent message. Does not implicitly {@link GameEvent.verify|verify} messages.
     * @function encode
     * @memberof GameEvent
     * @static
     * @param {IGameEvent} message GameEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.prepared != null && message.hasOwnProperty("prepared"))
            $root.GameEvent.Prepared.encode(message.prepared, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.noProgressInGame != null && message.hasOwnProperty("noProgressInGame"))
            $root.GameEvent.NoProgressInGame.encode(message.noProgressInGame, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.placementFailed != null && message.hasOwnProperty("placementFailed"))
            $root.GameEvent.PlacementFailed.encode(message.placementFailed, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.placementSucceeded != null && message.hasOwnProperty("placementSucceeded"))
            $root.GameEvent.PlacementSucceeded.encode(message.placementSucceeded, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.ballLeftFieldTouchLine != null && message.hasOwnProperty("ballLeftFieldTouchLine"))
            $root.GameEvent.BallLeftField.encode(message.ballLeftFieldTouchLine, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.ballLeftFieldGoalLine != null && message.hasOwnProperty("ballLeftFieldGoalLine"))
            $root.GameEvent.BallLeftField.encode(message.ballLeftFieldGoalLine, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.goal != null && message.hasOwnProperty("goal"))
            $root.GameEvent.Goal.encode(message.goal, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.indirectGoal != null && message.hasOwnProperty("indirectGoal"))
            $root.GameEvent.IndirectGoal.encode(message.indirectGoal, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.chippedGoal != null && message.hasOwnProperty("chippedGoal"))
            $root.GameEvent.ChippedGoal.encode(message.chippedGoal, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.aimlessKick != null && message.hasOwnProperty("aimlessKick"))
            $root.GameEvent.AimlessKick.encode(message.aimlessKick, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.kickTimeout != null && message.hasOwnProperty("kickTimeout"))
            $root.GameEvent.KickTimeout.encode(message.kickTimeout, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.keeperHeldBall != null && message.hasOwnProperty("keeperHeldBall"))
            $root.GameEvent.KeeperHeldBall.encode(message.keeperHeldBall, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.attackerDoubleTouchedBall != null && message.hasOwnProperty("attackerDoubleTouchedBall"))
            $root.GameEvent.AttackerDoubleTouchedBall.encode(message.attackerDoubleTouchedBall, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.attackerTouchedBallInDefenseArea != null && message.hasOwnProperty("attackerTouchedBallInDefenseArea"))
            $root.GameEvent.AttackerTouchedBallInDefenseArea.encode(message.attackerTouchedBallInDefenseArea, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.attackerTouchedOpponentInDefenseArea != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseArea"))
            $root.GameEvent.AttackerTouchedOpponentInDefenseArea.encode(message.attackerTouchedOpponentInDefenseArea, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.botDribbledBallTooFar != null && message.hasOwnProperty("botDribbledBallTooFar"))
            $root.GameEvent.BotDribbledBallTooFar.encode(message.botDribbledBallTooFar, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.botKickedBallTooFast != null && message.hasOwnProperty("botKickedBallTooFast"))
            $root.GameEvent.BotKickedBallTooFast.encode(message.botKickedBallTooFast, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.attackerTooCloseToDefenseArea != null && message.hasOwnProperty("attackerTooCloseToDefenseArea"))
            $root.GameEvent.AttackerTooCloseToDefenseArea.encode(message.attackerTooCloseToDefenseArea, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.botInterferedPlacement != null && message.hasOwnProperty("botInterferedPlacement"))
            $root.GameEvent.BotInterferedPlacement.encode(message.botInterferedPlacement, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.botCrashDrawn != null && message.hasOwnProperty("botCrashDrawn"))
            $root.GameEvent.BotCrashDrawn.encode(message.botCrashDrawn, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.botCrashUnique != null && message.hasOwnProperty("botCrashUnique"))
            $root.GameEvent.BotCrashUnique.encode(message.botCrashUnique, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.botCrashUniqueSkipped != null && message.hasOwnProperty("botCrashUniqueSkipped"))
            $root.GameEvent.BotCrashUnique.encode(message.botCrashUniqueSkipped, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.botPushedBot != null && message.hasOwnProperty("botPushedBot"))
            $root.GameEvent.BotPushedBot.encode(message.botPushedBot, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.botPushedBotSkipped != null && message.hasOwnProperty("botPushedBotSkipped"))
            $root.GameEvent.BotPushedBot.encode(message.botPushedBotSkipped, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.botHeldBallDeliberately != null && message.hasOwnProperty("botHeldBallDeliberately"))
            $root.GameEvent.BotHeldBallDeliberately.encode(message.botHeldBallDeliberately, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.botTippedOver != null && message.hasOwnProperty("botTippedOver"))
            $root.GameEvent.BotTippedOver.encode(message.botTippedOver, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.botTooFastInStop != null && message.hasOwnProperty("botTooFastInStop"))
            $root.GameEvent.BotTooFastInStop.encode(message.botTooFastInStop, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.defenderTooCloseToKickPoint != null && message.hasOwnProperty("defenderTooCloseToKickPoint"))
            $root.GameEvent.DefenderTooCloseToKickPoint.encode(message.defenderTooCloseToKickPoint, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.defenderInDefenseAreaPartially != null && message.hasOwnProperty("defenderInDefenseAreaPartially"))
            $root.GameEvent.DefenderInDefenseAreaPartially.encode(message.defenderInDefenseAreaPartially, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.defenderInDefenseArea != null && message.hasOwnProperty("defenderInDefenseArea"))
            $root.GameEvent.DefenderInDefenseArea.encode(message.defenderInDefenseArea, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        if (message.multipleCards != null && message.hasOwnProperty("multipleCards"))
            $root.GameEvent.MultipleCards.encode(message.multipleCards, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
        if (message.multiplePlacementFailures != null && message.hasOwnProperty("multiplePlacementFailures"))
            $root.GameEvent.MultiplePlacementFailures.encode(message.multiplePlacementFailures, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
        if (message.multipleFouls != null && message.hasOwnProperty("multipleFouls"))
            $root.GameEvent.MultipleFouls.encode(message.multipleFouls, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
        if (message.unsportingBehaviorMinor != null && message.hasOwnProperty("unsportingBehaviorMinor"))
            $root.GameEvent.UnsportingBehaviorMinor.encode(message.unsportingBehaviorMinor, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
        if (message.unsportingBehaviorMajor != null && message.hasOwnProperty("unsportingBehaviorMajor"))
            $root.GameEvent.UnsportingBehaviorMajor.encode(message.unsportingBehaviorMajor, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
        if (message.botSubstitution != null && message.hasOwnProperty("botSubstitution"))
            $root.GameEvent.BotSubstitution.encode(message.botSubstitution, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
        if (message.tooManyRobots != null && message.hasOwnProperty("tooManyRobots"))
            $root.GameEvent.TooManyRobots.encode(message.tooManyRobots, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
        if (message.possibleGoal != null && message.hasOwnProperty("possibleGoal"))
            $root.GameEvent.Goal.encode(message.possibleGoal, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
        writer.uint32(/* id 40, wireType 0 =*/320).int32(message.type);
        if (message.origin != null && message.origin.length)
            for (let i = 0; i < message.origin.length; ++i)
                writer.uint32(/* id 41, wireType 2 =*/330).string(message.origin[i]);
        if (message.attackerTouchedOpponentInDefenseAreaSkipped != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseAreaSkipped"))
            $root.GameEvent.AttackerTouchedOpponentInDefenseArea.encode(message.attackerTouchedOpponentInDefenseAreaSkipped, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GameEvent message, length delimited. Does not implicitly {@link GameEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameEvent
     * @static
     * @param {IGameEvent} message GameEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameEvent message from the specified reader or buffer.
     * @function decode
     * @memberof GameEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameEvent} GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 40:
                message.type = reader.int32();
                break;
            case 41:
                if (!(message.origin && message.origin.length))
                    message.origin = [];
                message.origin.push(reader.string());
                break;
            case 1:
                message.prepared = $root.GameEvent.Prepared.decode(reader, reader.uint32());
                break;
            case 2:
                message.noProgressInGame = $root.GameEvent.NoProgressInGame.decode(reader, reader.uint32());
                break;
            case 3:
                message.placementFailed = $root.GameEvent.PlacementFailed.decode(reader, reader.uint32());
                break;
            case 5:
                message.placementSucceeded = $root.GameEvent.PlacementSucceeded.decode(reader, reader.uint32());
                break;
            case 37:
                message.botSubstitution = $root.GameEvent.BotSubstitution.decode(reader, reader.uint32());
                break;
            case 38:
                message.tooManyRobots = $root.GameEvent.TooManyRobots.decode(reader, reader.uint32());
                break;
            case 6:
                message.ballLeftFieldTouchLine = $root.GameEvent.BallLeftField.decode(reader, reader.uint32());
                break;
            case 7:
                message.ballLeftFieldGoalLine = $root.GameEvent.BallLeftField.decode(reader, reader.uint32());
                break;
            case 39:
                message.possibleGoal = $root.GameEvent.Goal.decode(reader, reader.uint32());
                break;
            case 8:
                message.goal = $root.GameEvent.Goal.decode(reader, reader.uint32());
                break;
            case 9:
                message.indirectGoal = $root.GameEvent.IndirectGoal.decode(reader, reader.uint32());
                break;
            case 10:
                message.chippedGoal = $root.GameEvent.ChippedGoal.decode(reader, reader.uint32());
                break;
            case 11:
                message.aimlessKick = $root.GameEvent.AimlessKick.decode(reader, reader.uint32());
                break;
            case 12:
                message.kickTimeout = $root.GameEvent.KickTimeout.decode(reader, reader.uint32());
                break;
            case 13:
                message.keeperHeldBall = $root.GameEvent.KeeperHeldBall.decode(reader, reader.uint32());
                break;
            case 14:
                message.attackerDoubleTouchedBall = $root.GameEvent.AttackerDoubleTouchedBall.decode(reader, reader.uint32());
                break;
            case 15:
                message.attackerTouchedBallInDefenseArea = $root.GameEvent.AttackerTouchedBallInDefenseArea.decode(reader, reader.uint32());
                break;
            case 16:
                message.attackerTouchedOpponentInDefenseArea = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.decode(reader, reader.uint32());
                break;
            case 42:
                message.attackerTouchedOpponentInDefenseAreaSkipped = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.decode(reader, reader.uint32());
                break;
            case 17:
                message.botDribbledBallTooFar = $root.GameEvent.BotDribbledBallTooFar.decode(reader, reader.uint32());
                break;
            case 18:
                message.botKickedBallTooFast = $root.GameEvent.BotKickedBallTooFast.decode(reader, reader.uint32());
                break;
            case 19:
                message.attackerTooCloseToDefenseArea = $root.GameEvent.AttackerTooCloseToDefenseArea.decode(reader, reader.uint32());
                break;
            case 20:
                message.botInterferedPlacement = $root.GameEvent.BotInterferedPlacement.decode(reader, reader.uint32());
                break;
            case 21:
                message.botCrashDrawn = $root.GameEvent.BotCrashDrawn.decode(reader, reader.uint32());
                break;
            case 22:
                message.botCrashUnique = $root.GameEvent.BotCrashUnique.decode(reader, reader.uint32());
                break;
            case 23:
                message.botCrashUniqueSkipped = $root.GameEvent.BotCrashUnique.decode(reader, reader.uint32());
                break;
            case 24:
                message.botPushedBot = $root.GameEvent.BotPushedBot.decode(reader, reader.uint32());
                break;
            case 25:
                message.botPushedBotSkipped = $root.GameEvent.BotPushedBot.decode(reader, reader.uint32());
                break;
            case 26:
                message.botHeldBallDeliberately = $root.GameEvent.BotHeldBallDeliberately.decode(reader, reader.uint32());
                break;
            case 27:
                message.botTippedOver = $root.GameEvent.BotTippedOver.decode(reader, reader.uint32());
                break;
            case 28:
                message.botTooFastInStop = $root.GameEvent.BotTooFastInStop.decode(reader, reader.uint32());
                break;
            case 29:
                message.defenderTooCloseToKickPoint = $root.GameEvent.DefenderTooCloseToKickPoint.decode(reader, reader.uint32());
                break;
            case 30:
                message.defenderInDefenseAreaPartially = $root.GameEvent.DefenderInDefenseAreaPartially.decode(reader, reader.uint32());
                break;
            case 31:
                message.defenderInDefenseArea = $root.GameEvent.DefenderInDefenseArea.decode(reader, reader.uint32());
                break;
            case 32:
                message.multipleCards = $root.GameEvent.MultipleCards.decode(reader, reader.uint32());
                break;
            case 33:
                message.multiplePlacementFailures = $root.GameEvent.MultiplePlacementFailures.decode(reader, reader.uint32());
                break;
            case 34:
                message.multipleFouls = $root.GameEvent.MultipleFouls.decode(reader, reader.uint32());
                break;
            case 35:
                message.unsportingBehaviorMinor = $root.GameEvent.UnsportingBehaviorMinor.decode(reader, reader.uint32());
                break;
            case 36:
                message.unsportingBehaviorMajor = $root.GameEvent.UnsportingBehaviorMajor.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a GameEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameEvent} GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameEvent message.
     * @function verify
     * @memberof GameEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 5:
        case 37:
        case 38:
        case 6:
        case 7:
        case 39:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 40:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
            break;
        }
        if (message.origin != null && message.hasOwnProperty("origin")) {
            if (!Array.isArray(message.origin))
                return "origin: array expected";
            for (let i = 0; i < message.origin.length; ++i)
                if (!$util.isString(message.origin[i]))
                    return "origin: string[] expected";
        }
        if (message.prepared != null && message.hasOwnProperty("prepared")) {
            properties.event = 1;
            {
                let error = $root.GameEvent.Prepared.verify(message.prepared);
                if (error)
                    return "prepared." + error;
            }
        }
        if (message.noProgressInGame != null && message.hasOwnProperty("noProgressInGame")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.NoProgressInGame.verify(message.noProgressInGame);
                if (error)
                    return "noProgressInGame." + error;
            }
        }
        if (message.placementFailed != null && message.hasOwnProperty("placementFailed")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.PlacementFailed.verify(message.placementFailed);
                if (error)
                    return "placementFailed." + error;
            }
        }
        if (message.placementSucceeded != null && message.hasOwnProperty("placementSucceeded")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.PlacementSucceeded.verify(message.placementSucceeded);
                if (error)
                    return "placementSucceeded." + error;
            }
        }
        if (message.botSubstitution != null && message.hasOwnProperty("botSubstitution")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotSubstitution.verify(message.botSubstitution);
                if (error)
                    return "botSubstitution." + error;
            }
        }
        if (message.tooManyRobots != null && message.hasOwnProperty("tooManyRobots")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.TooManyRobots.verify(message.tooManyRobots);
                if (error)
                    return "tooManyRobots." + error;
            }
        }
        if (message.ballLeftFieldTouchLine != null && message.hasOwnProperty("ballLeftFieldTouchLine")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BallLeftField.verify(message.ballLeftFieldTouchLine);
                if (error)
                    return "ballLeftFieldTouchLine." + error;
            }
        }
        if (message.ballLeftFieldGoalLine != null && message.hasOwnProperty("ballLeftFieldGoalLine")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BallLeftField.verify(message.ballLeftFieldGoalLine);
                if (error)
                    return "ballLeftFieldGoalLine." + error;
            }
        }
        if (message.possibleGoal != null && message.hasOwnProperty("possibleGoal")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.Goal.verify(message.possibleGoal);
                if (error)
                    return "possibleGoal." + error;
            }
        }
        if (message.goal != null && message.hasOwnProperty("goal")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.Goal.verify(message.goal);
                if (error)
                    return "goal." + error;
            }
        }
        if (message.indirectGoal != null && message.hasOwnProperty("indirectGoal")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.IndirectGoal.verify(message.indirectGoal);
                if (error)
                    return "indirectGoal." + error;
            }
        }
        if (message.chippedGoal != null && message.hasOwnProperty("chippedGoal")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.ChippedGoal.verify(message.chippedGoal);
                if (error)
                    return "chippedGoal." + error;
            }
        }
        if (message.aimlessKick != null && message.hasOwnProperty("aimlessKick")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AimlessKick.verify(message.aimlessKick);
                if (error)
                    return "aimlessKick." + error;
            }
        }
        if (message.kickTimeout != null && message.hasOwnProperty("kickTimeout")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.KickTimeout.verify(message.kickTimeout);
                if (error)
                    return "kickTimeout." + error;
            }
        }
        if (message.keeperHeldBall != null && message.hasOwnProperty("keeperHeldBall")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.KeeperHeldBall.verify(message.keeperHeldBall);
                if (error)
                    return "keeperHeldBall." + error;
            }
        }
        if (message.attackerDoubleTouchedBall != null && message.hasOwnProperty("attackerDoubleTouchedBall")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AttackerDoubleTouchedBall.verify(message.attackerDoubleTouchedBall);
                if (error)
                    return "attackerDoubleTouchedBall." + error;
            }
        }
        if (message.attackerTouchedBallInDefenseArea != null && message.hasOwnProperty("attackerTouchedBallInDefenseArea")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AttackerTouchedBallInDefenseArea.verify(message.attackerTouchedBallInDefenseArea);
                if (error)
                    return "attackerTouchedBallInDefenseArea." + error;
            }
        }
        if (message.attackerTouchedOpponentInDefenseArea != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseArea")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.verify(message.attackerTouchedOpponentInDefenseArea);
                if (error)
                    return "attackerTouchedOpponentInDefenseArea." + error;
            }
        }
        if (message.attackerTouchedOpponentInDefenseAreaSkipped != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseAreaSkipped")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.verify(message.attackerTouchedOpponentInDefenseAreaSkipped);
                if (error)
                    return "attackerTouchedOpponentInDefenseAreaSkipped." + error;
            }
        }
        if (message.botDribbledBallTooFar != null && message.hasOwnProperty("botDribbledBallTooFar")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotDribbledBallTooFar.verify(message.botDribbledBallTooFar);
                if (error)
                    return "botDribbledBallTooFar." + error;
            }
        }
        if (message.botKickedBallTooFast != null && message.hasOwnProperty("botKickedBallTooFast")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotKickedBallTooFast.verify(message.botKickedBallTooFast);
                if (error)
                    return "botKickedBallTooFast." + error;
            }
        }
        if (message.attackerTooCloseToDefenseArea != null && message.hasOwnProperty("attackerTooCloseToDefenseArea")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.AttackerTooCloseToDefenseArea.verify(message.attackerTooCloseToDefenseArea);
                if (error)
                    return "attackerTooCloseToDefenseArea." + error;
            }
        }
        if (message.botInterferedPlacement != null && message.hasOwnProperty("botInterferedPlacement")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotInterferedPlacement.verify(message.botInterferedPlacement);
                if (error)
                    return "botInterferedPlacement." + error;
            }
        }
        if (message.botCrashDrawn != null && message.hasOwnProperty("botCrashDrawn")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotCrashDrawn.verify(message.botCrashDrawn);
                if (error)
                    return "botCrashDrawn." + error;
            }
        }
        if (message.botCrashUnique != null && message.hasOwnProperty("botCrashUnique")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotCrashUnique.verify(message.botCrashUnique);
                if (error)
                    return "botCrashUnique." + error;
            }
        }
        if (message.botCrashUniqueSkipped != null && message.hasOwnProperty("botCrashUniqueSkipped")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotCrashUnique.verify(message.botCrashUniqueSkipped);
                if (error)
                    return "botCrashUniqueSkipped." + error;
            }
        }
        if (message.botPushedBot != null && message.hasOwnProperty("botPushedBot")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotPushedBot.verify(message.botPushedBot);
                if (error)
                    return "botPushedBot." + error;
            }
        }
        if (message.botPushedBotSkipped != null && message.hasOwnProperty("botPushedBotSkipped")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotPushedBot.verify(message.botPushedBotSkipped);
                if (error)
                    return "botPushedBotSkipped." + error;
            }
        }
        if (message.botHeldBallDeliberately != null && message.hasOwnProperty("botHeldBallDeliberately")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotHeldBallDeliberately.verify(message.botHeldBallDeliberately);
                if (error)
                    return "botHeldBallDeliberately." + error;
            }
        }
        if (message.botTippedOver != null && message.hasOwnProperty("botTippedOver")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotTippedOver.verify(message.botTippedOver);
                if (error)
                    return "botTippedOver." + error;
            }
        }
        if (message.botTooFastInStop != null && message.hasOwnProperty("botTooFastInStop")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.BotTooFastInStop.verify(message.botTooFastInStop);
                if (error)
                    return "botTooFastInStop." + error;
            }
        }
        if (message.defenderTooCloseToKickPoint != null && message.hasOwnProperty("defenderTooCloseToKickPoint")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.DefenderTooCloseToKickPoint.verify(message.defenderTooCloseToKickPoint);
                if (error)
                    return "defenderTooCloseToKickPoint." + error;
            }
        }
        if (message.defenderInDefenseAreaPartially != null && message.hasOwnProperty("defenderInDefenseAreaPartially")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.DefenderInDefenseAreaPartially.verify(message.defenderInDefenseAreaPartially);
                if (error)
                    return "defenderInDefenseAreaPartially." + error;
            }
        }
        if (message.defenderInDefenseArea != null && message.hasOwnProperty("defenderInDefenseArea")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.DefenderInDefenseArea.verify(message.defenderInDefenseArea);
                if (error)
                    return "defenderInDefenseArea." + error;
            }
        }
        if (message.multipleCards != null && message.hasOwnProperty("multipleCards")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.MultipleCards.verify(message.multipleCards);
                if (error)
                    return "multipleCards." + error;
            }
        }
        if (message.multiplePlacementFailures != null && message.hasOwnProperty("multiplePlacementFailures")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.MultiplePlacementFailures.verify(message.multiplePlacementFailures);
                if (error)
                    return "multiplePlacementFailures." + error;
            }
        }
        if (message.multipleFouls != null && message.hasOwnProperty("multipleFouls")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.MultipleFouls.verify(message.multipleFouls);
                if (error)
                    return "multipleFouls." + error;
            }
        }
        if (message.unsportingBehaviorMinor != null && message.hasOwnProperty("unsportingBehaviorMinor")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.UnsportingBehaviorMinor.verify(message.unsportingBehaviorMinor);
                if (error)
                    return "unsportingBehaviorMinor." + error;
            }
        }
        if (message.unsportingBehaviorMajor != null && message.hasOwnProperty("unsportingBehaviorMajor")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GameEvent.UnsportingBehaviorMajor.verify(message.unsportingBehaviorMajor);
                if (error)
                    return "unsportingBehaviorMajor." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GameEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameEvent} GameEvent
     */
    GameEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.GameEvent)
            return object;
        let message = new $root.GameEvent();
        switch (object.type) {
        case "UNKNOWN_GAME_EVENT_TYPE":
        case 0:
            message.type = 0;
            break;
        case "PREPARED":
        case 1:
            message.type = 1;
            break;
        case "NO_PROGRESS_IN_GAME":
        case 2:
            message.type = 2;
            break;
        case "PLACEMENT_FAILED":
        case 3:
            message.type = 3;
            break;
        case "PLACEMENT_SUCCEEDED":
        case 5:
            message.type = 5;
            break;
        case "BOT_SUBSTITUTION":
        case 37:
            message.type = 37;
            break;
        case "TOO_MANY_ROBOTS":
        case 38:
            message.type = 38;
            break;
        case "BALL_LEFT_FIELD_TOUCH_LINE":
        case 6:
            message.type = 6;
            break;
        case "BALL_LEFT_FIELD_GOAL_LINE":
        case 7:
            message.type = 7;
            break;
        case "POSSIBLE_GOAL":
        case 39:
            message.type = 39;
            break;
        case "GOAL":
        case 8:
            message.type = 8;
            break;
        case "INDIRECT_GOAL":
        case 9:
            message.type = 9;
            break;
        case "CHIPPED_GOAL":
        case 10:
            message.type = 10;
            break;
        case "AIMLESS_KICK":
        case 11:
            message.type = 11;
            break;
        case "KICK_TIMEOUT":
        case 12:
            message.type = 12;
            break;
        case "KEEPER_HELD_BALL":
        case 13:
            message.type = 13;
            break;
        case "ATTACKER_DOUBLE_TOUCHED_BALL":
        case 14:
            message.type = 14;
            break;
        case "ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA":
        case 15:
            message.type = 15;
            break;
        case "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA":
        case 16:
            message.type = 16;
            break;
        case "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED":
        case 40:
            message.type = 40;
            break;
        case "BOT_DRIBBLED_BALL_TOO_FAR":
        case 17:
            message.type = 17;
            break;
        case "BOT_KICKED_BALL_TOO_FAST":
        case 18:
            message.type = 18;
            break;
        case "ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA":
        case 19:
            message.type = 19;
            break;
        case "BOT_INTERFERED_PLACEMENT":
        case 20:
            message.type = 20;
            break;
        case "BOT_CRASH_DRAWN":
        case 21:
            message.type = 21;
            break;
        case "BOT_CRASH_UNIQUE":
        case 22:
            message.type = 22;
            break;
        case "BOT_CRASH_UNIQUE_SKIPPED":
        case 23:
            message.type = 23;
            break;
        case "BOT_PUSHED_BOT":
        case 24:
            message.type = 24;
            break;
        case "BOT_PUSHED_BOT_SKIPPED":
        case 25:
            message.type = 25;
            break;
        case "BOT_HELD_BALL_DELIBERATELY":
        case 26:
            message.type = 26;
            break;
        case "BOT_TIPPED_OVER":
        case 27:
            message.type = 27;
            break;
        case "BOT_TOO_FAST_IN_STOP":
        case 28:
            message.type = 28;
            break;
        case "DEFENDER_TOO_CLOSE_TO_KICK_POINT":
        case 29:
            message.type = 29;
            break;
        case "DEFENDER_IN_DEFENSE_AREA_PARTIALLY":
        case 30:
            message.type = 30;
            break;
        case "DEFENDER_IN_DEFENSE_AREA":
        case 31:
            message.type = 31;
            break;
        case "MULTIPLE_CARDS":
        case 32:
            message.type = 32;
            break;
        case "MULTIPLE_PLACEMENT_FAILURES":
        case 33:
            message.type = 33;
            break;
        case "MULTIPLE_FOULS":
        case 34:
            message.type = 34;
            break;
        case "UNSPORTING_BEHAVIOR_MINOR":
        case 35:
            message.type = 35;
            break;
        case "UNSPORTING_BEHAVIOR_MAJOR":
        case 36:
            message.type = 36;
            break;
        }
        if (object.origin) {
            if (!Array.isArray(object.origin))
                throw TypeError(".GameEvent.origin: array expected");
            message.origin = [];
            for (let i = 0; i < object.origin.length; ++i)
                message.origin[i] = String(object.origin[i]);
        }
        if (object.prepared != null) {
            if (typeof object.prepared !== "object")
                throw TypeError(".GameEvent.prepared: object expected");
            message.prepared = $root.GameEvent.Prepared.fromObject(object.prepared);
        }
        if (object.noProgressInGame != null) {
            if (typeof object.noProgressInGame !== "object")
                throw TypeError(".GameEvent.noProgressInGame: object expected");
            message.noProgressInGame = $root.GameEvent.NoProgressInGame.fromObject(object.noProgressInGame);
        }
        if (object.placementFailed != null) {
            if (typeof object.placementFailed !== "object")
                throw TypeError(".GameEvent.placementFailed: object expected");
            message.placementFailed = $root.GameEvent.PlacementFailed.fromObject(object.placementFailed);
        }
        if (object.placementSucceeded != null) {
            if (typeof object.placementSucceeded !== "object")
                throw TypeError(".GameEvent.placementSucceeded: object expected");
            message.placementSucceeded = $root.GameEvent.PlacementSucceeded.fromObject(object.placementSucceeded);
        }
        if (object.botSubstitution != null) {
            if (typeof object.botSubstitution !== "object")
                throw TypeError(".GameEvent.botSubstitution: object expected");
            message.botSubstitution = $root.GameEvent.BotSubstitution.fromObject(object.botSubstitution);
        }
        if (object.tooManyRobots != null) {
            if (typeof object.tooManyRobots !== "object")
                throw TypeError(".GameEvent.tooManyRobots: object expected");
            message.tooManyRobots = $root.GameEvent.TooManyRobots.fromObject(object.tooManyRobots);
        }
        if (object.ballLeftFieldTouchLine != null) {
            if (typeof object.ballLeftFieldTouchLine !== "object")
                throw TypeError(".GameEvent.ballLeftFieldTouchLine: object expected");
            message.ballLeftFieldTouchLine = $root.GameEvent.BallLeftField.fromObject(object.ballLeftFieldTouchLine);
        }
        if (object.ballLeftFieldGoalLine != null) {
            if (typeof object.ballLeftFieldGoalLine !== "object")
                throw TypeError(".GameEvent.ballLeftFieldGoalLine: object expected");
            message.ballLeftFieldGoalLine = $root.GameEvent.BallLeftField.fromObject(object.ballLeftFieldGoalLine);
        }
        if (object.possibleGoal != null) {
            if (typeof object.possibleGoal !== "object")
                throw TypeError(".GameEvent.possibleGoal: object expected");
            message.possibleGoal = $root.GameEvent.Goal.fromObject(object.possibleGoal);
        }
        if (object.goal != null) {
            if (typeof object.goal !== "object")
                throw TypeError(".GameEvent.goal: object expected");
            message.goal = $root.GameEvent.Goal.fromObject(object.goal);
        }
        if (object.indirectGoal != null) {
            if (typeof object.indirectGoal !== "object")
                throw TypeError(".GameEvent.indirectGoal: object expected");
            message.indirectGoal = $root.GameEvent.IndirectGoal.fromObject(object.indirectGoal);
        }
        if (object.chippedGoal != null) {
            if (typeof object.chippedGoal !== "object")
                throw TypeError(".GameEvent.chippedGoal: object expected");
            message.chippedGoal = $root.GameEvent.ChippedGoal.fromObject(object.chippedGoal);
        }
        if (object.aimlessKick != null) {
            if (typeof object.aimlessKick !== "object")
                throw TypeError(".GameEvent.aimlessKick: object expected");
            message.aimlessKick = $root.GameEvent.AimlessKick.fromObject(object.aimlessKick);
        }
        if (object.kickTimeout != null) {
            if (typeof object.kickTimeout !== "object")
                throw TypeError(".GameEvent.kickTimeout: object expected");
            message.kickTimeout = $root.GameEvent.KickTimeout.fromObject(object.kickTimeout);
        }
        if (object.keeperHeldBall != null) {
            if (typeof object.keeperHeldBall !== "object")
                throw TypeError(".GameEvent.keeperHeldBall: object expected");
            message.keeperHeldBall = $root.GameEvent.KeeperHeldBall.fromObject(object.keeperHeldBall);
        }
        if (object.attackerDoubleTouchedBall != null) {
            if (typeof object.attackerDoubleTouchedBall !== "object")
                throw TypeError(".GameEvent.attackerDoubleTouchedBall: object expected");
            message.attackerDoubleTouchedBall = $root.GameEvent.AttackerDoubleTouchedBall.fromObject(object.attackerDoubleTouchedBall);
        }
        if (object.attackerTouchedBallInDefenseArea != null) {
            if (typeof object.attackerTouchedBallInDefenseArea !== "object")
                throw TypeError(".GameEvent.attackerTouchedBallInDefenseArea: object expected");
            message.attackerTouchedBallInDefenseArea = $root.GameEvent.AttackerTouchedBallInDefenseArea.fromObject(object.attackerTouchedBallInDefenseArea);
        }
        if (object.attackerTouchedOpponentInDefenseArea != null) {
            if (typeof object.attackerTouchedOpponentInDefenseArea !== "object")
                throw TypeError(".GameEvent.attackerTouchedOpponentInDefenseArea: object expected");
            message.attackerTouchedOpponentInDefenseArea = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.fromObject(object.attackerTouchedOpponentInDefenseArea);
        }
        if (object.attackerTouchedOpponentInDefenseAreaSkipped != null) {
            if (typeof object.attackerTouchedOpponentInDefenseAreaSkipped !== "object")
                throw TypeError(".GameEvent.attackerTouchedOpponentInDefenseAreaSkipped: object expected");
            message.attackerTouchedOpponentInDefenseAreaSkipped = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.fromObject(object.attackerTouchedOpponentInDefenseAreaSkipped);
        }
        if (object.botDribbledBallTooFar != null) {
            if (typeof object.botDribbledBallTooFar !== "object")
                throw TypeError(".GameEvent.botDribbledBallTooFar: object expected");
            message.botDribbledBallTooFar = $root.GameEvent.BotDribbledBallTooFar.fromObject(object.botDribbledBallTooFar);
        }
        if (object.botKickedBallTooFast != null) {
            if (typeof object.botKickedBallTooFast !== "object")
                throw TypeError(".GameEvent.botKickedBallTooFast: object expected");
            message.botKickedBallTooFast = $root.GameEvent.BotKickedBallTooFast.fromObject(object.botKickedBallTooFast);
        }
        if (object.attackerTooCloseToDefenseArea != null) {
            if (typeof object.attackerTooCloseToDefenseArea !== "object")
                throw TypeError(".GameEvent.attackerTooCloseToDefenseArea: object expected");
            message.attackerTooCloseToDefenseArea = $root.GameEvent.AttackerTooCloseToDefenseArea.fromObject(object.attackerTooCloseToDefenseArea);
        }
        if (object.botInterferedPlacement != null) {
            if (typeof object.botInterferedPlacement !== "object")
                throw TypeError(".GameEvent.botInterferedPlacement: object expected");
            message.botInterferedPlacement = $root.GameEvent.BotInterferedPlacement.fromObject(object.botInterferedPlacement);
        }
        if (object.botCrashDrawn != null) {
            if (typeof object.botCrashDrawn !== "object")
                throw TypeError(".GameEvent.botCrashDrawn: object expected");
            message.botCrashDrawn = $root.GameEvent.BotCrashDrawn.fromObject(object.botCrashDrawn);
        }
        if (object.botCrashUnique != null) {
            if (typeof object.botCrashUnique !== "object")
                throw TypeError(".GameEvent.botCrashUnique: object expected");
            message.botCrashUnique = $root.GameEvent.BotCrashUnique.fromObject(object.botCrashUnique);
        }
        if (object.botCrashUniqueSkipped != null) {
            if (typeof object.botCrashUniqueSkipped !== "object")
                throw TypeError(".GameEvent.botCrashUniqueSkipped: object expected");
            message.botCrashUniqueSkipped = $root.GameEvent.BotCrashUnique.fromObject(object.botCrashUniqueSkipped);
        }
        if (object.botPushedBot != null) {
            if (typeof object.botPushedBot !== "object")
                throw TypeError(".GameEvent.botPushedBot: object expected");
            message.botPushedBot = $root.GameEvent.BotPushedBot.fromObject(object.botPushedBot);
        }
        if (object.botPushedBotSkipped != null) {
            if (typeof object.botPushedBotSkipped !== "object")
                throw TypeError(".GameEvent.botPushedBotSkipped: object expected");
            message.botPushedBotSkipped = $root.GameEvent.BotPushedBot.fromObject(object.botPushedBotSkipped);
        }
        if (object.botHeldBallDeliberately != null) {
            if (typeof object.botHeldBallDeliberately !== "object")
                throw TypeError(".GameEvent.botHeldBallDeliberately: object expected");
            message.botHeldBallDeliberately = $root.GameEvent.BotHeldBallDeliberately.fromObject(object.botHeldBallDeliberately);
        }
        if (object.botTippedOver != null) {
            if (typeof object.botTippedOver !== "object")
                throw TypeError(".GameEvent.botTippedOver: object expected");
            message.botTippedOver = $root.GameEvent.BotTippedOver.fromObject(object.botTippedOver);
        }
        if (object.botTooFastInStop != null) {
            if (typeof object.botTooFastInStop !== "object")
                throw TypeError(".GameEvent.botTooFastInStop: object expected");
            message.botTooFastInStop = $root.GameEvent.BotTooFastInStop.fromObject(object.botTooFastInStop);
        }
        if (object.defenderTooCloseToKickPoint != null) {
            if (typeof object.defenderTooCloseToKickPoint !== "object")
                throw TypeError(".GameEvent.defenderTooCloseToKickPoint: object expected");
            message.defenderTooCloseToKickPoint = $root.GameEvent.DefenderTooCloseToKickPoint.fromObject(object.defenderTooCloseToKickPoint);
        }
        if (object.defenderInDefenseAreaPartially != null) {
            if (typeof object.defenderInDefenseAreaPartially !== "object")
                throw TypeError(".GameEvent.defenderInDefenseAreaPartially: object expected");
            message.defenderInDefenseAreaPartially = $root.GameEvent.DefenderInDefenseAreaPartially.fromObject(object.defenderInDefenseAreaPartially);
        }
        if (object.defenderInDefenseArea != null) {
            if (typeof object.defenderInDefenseArea !== "object")
                throw TypeError(".GameEvent.defenderInDefenseArea: object expected");
            message.defenderInDefenseArea = $root.GameEvent.DefenderInDefenseArea.fromObject(object.defenderInDefenseArea);
        }
        if (object.multipleCards != null) {
            if (typeof object.multipleCards !== "object")
                throw TypeError(".GameEvent.multipleCards: object expected");
            message.multipleCards = $root.GameEvent.MultipleCards.fromObject(object.multipleCards);
        }
        if (object.multiplePlacementFailures != null) {
            if (typeof object.multiplePlacementFailures !== "object")
                throw TypeError(".GameEvent.multiplePlacementFailures: object expected");
            message.multiplePlacementFailures = $root.GameEvent.MultiplePlacementFailures.fromObject(object.multiplePlacementFailures);
        }
        if (object.multipleFouls != null) {
            if (typeof object.multipleFouls !== "object")
                throw TypeError(".GameEvent.multipleFouls: object expected");
            message.multipleFouls = $root.GameEvent.MultipleFouls.fromObject(object.multipleFouls);
        }
        if (object.unsportingBehaviorMinor != null) {
            if (typeof object.unsportingBehaviorMinor !== "object")
                throw TypeError(".GameEvent.unsportingBehaviorMinor: object expected");
            message.unsportingBehaviorMinor = $root.GameEvent.UnsportingBehaviorMinor.fromObject(object.unsportingBehaviorMinor);
        }
        if (object.unsportingBehaviorMajor != null) {
            if (typeof object.unsportingBehaviorMajor !== "object")
                throw TypeError(".GameEvent.unsportingBehaviorMajor: object expected");
            message.unsportingBehaviorMajor = $root.GameEvent.UnsportingBehaviorMajor.fromObject(object.unsportingBehaviorMajor);
        }
        return message;
    };

    /**
     * Creates a plain object from a GameEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameEvent
     * @static
     * @param {GameEvent} message GameEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.origin = [];
        if (options.defaults)
            object.type = options.enums === String ? "UNKNOWN_GAME_EVENT_TYPE" : 0;
        if (message.prepared != null && message.hasOwnProperty("prepared")) {
            object.prepared = $root.GameEvent.Prepared.toObject(message.prepared, options);
            if (options.oneofs)
                object.event = "prepared";
        }
        if (message.noProgressInGame != null && message.hasOwnProperty("noProgressInGame")) {
            object.noProgressInGame = $root.GameEvent.NoProgressInGame.toObject(message.noProgressInGame, options);
            if (options.oneofs)
                object.event = "noProgressInGame";
        }
        if (message.placementFailed != null && message.hasOwnProperty("placementFailed")) {
            object.placementFailed = $root.GameEvent.PlacementFailed.toObject(message.placementFailed, options);
            if (options.oneofs)
                object.event = "placementFailed";
        }
        if (message.placementSucceeded != null && message.hasOwnProperty("placementSucceeded")) {
            object.placementSucceeded = $root.GameEvent.PlacementSucceeded.toObject(message.placementSucceeded, options);
            if (options.oneofs)
                object.event = "placementSucceeded";
        }
        if (message.ballLeftFieldTouchLine != null && message.hasOwnProperty("ballLeftFieldTouchLine")) {
            object.ballLeftFieldTouchLine = $root.GameEvent.BallLeftField.toObject(message.ballLeftFieldTouchLine, options);
            if (options.oneofs)
                object.event = "ballLeftFieldTouchLine";
        }
        if (message.ballLeftFieldGoalLine != null && message.hasOwnProperty("ballLeftFieldGoalLine")) {
            object.ballLeftFieldGoalLine = $root.GameEvent.BallLeftField.toObject(message.ballLeftFieldGoalLine, options);
            if (options.oneofs)
                object.event = "ballLeftFieldGoalLine";
        }
        if (message.goal != null && message.hasOwnProperty("goal")) {
            object.goal = $root.GameEvent.Goal.toObject(message.goal, options);
            if (options.oneofs)
                object.event = "goal";
        }
        if (message.indirectGoal != null && message.hasOwnProperty("indirectGoal")) {
            object.indirectGoal = $root.GameEvent.IndirectGoal.toObject(message.indirectGoal, options);
            if (options.oneofs)
                object.event = "indirectGoal";
        }
        if (message.chippedGoal != null && message.hasOwnProperty("chippedGoal")) {
            object.chippedGoal = $root.GameEvent.ChippedGoal.toObject(message.chippedGoal, options);
            if (options.oneofs)
                object.event = "chippedGoal";
        }
        if (message.aimlessKick != null && message.hasOwnProperty("aimlessKick")) {
            object.aimlessKick = $root.GameEvent.AimlessKick.toObject(message.aimlessKick, options);
            if (options.oneofs)
                object.event = "aimlessKick";
        }
        if (message.kickTimeout != null && message.hasOwnProperty("kickTimeout")) {
            object.kickTimeout = $root.GameEvent.KickTimeout.toObject(message.kickTimeout, options);
            if (options.oneofs)
                object.event = "kickTimeout";
        }
        if (message.keeperHeldBall != null && message.hasOwnProperty("keeperHeldBall")) {
            object.keeperHeldBall = $root.GameEvent.KeeperHeldBall.toObject(message.keeperHeldBall, options);
            if (options.oneofs)
                object.event = "keeperHeldBall";
        }
        if (message.attackerDoubleTouchedBall != null && message.hasOwnProperty("attackerDoubleTouchedBall")) {
            object.attackerDoubleTouchedBall = $root.GameEvent.AttackerDoubleTouchedBall.toObject(message.attackerDoubleTouchedBall, options);
            if (options.oneofs)
                object.event = "attackerDoubleTouchedBall";
        }
        if (message.attackerTouchedBallInDefenseArea != null && message.hasOwnProperty("attackerTouchedBallInDefenseArea")) {
            object.attackerTouchedBallInDefenseArea = $root.GameEvent.AttackerTouchedBallInDefenseArea.toObject(message.attackerTouchedBallInDefenseArea, options);
            if (options.oneofs)
                object.event = "attackerTouchedBallInDefenseArea";
        }
        if (message.attackerTouchedOpponentInDefenseArea != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseArea")) {
            object.attackerTouchedOpponentInDefenseArea = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.toObject(message.attackerTouchedOpponentInDefenseArea, options);
            if (options.oneofs)
                object.event = "attackerTouchedOpponentInDefenseArea";
        }
        if (message.botDribbledBallTooFar != null && message.hasOwnProperty("botDribbledBallTooFar")) {
            object.botDribbledBallTooFar = $root.GameEvent.BotDribbledBallTooFar.toObject(message.botDribbledBallTooFar, options);
            if (options.oneofs)
                object.event = "botDribbledBallTooFar";
        }
        if (message.botKickedBallTooFast != null && message.hasOwnProperty("botKickedBallTooFast")) {
            object.botKickedBallTooFast = $root.GameEvent.BotKickedBallTooFast.toObject(message.botKickedBallTooFast, options);
            if (options.oneofs)
                object.event = "botKickedBallTooFast";
        }
        if (message.attackerTooCloseToDefenseArea != null && message.hasOwnProperty("attackerTooCloseToDefenseArea")) {
            object.attackerTooCloseToDefenseArea = $root.GameEvent.AttackerTooCloseToDefenseArea.toObject(message.attackerTooCloseToDefenseArea, options);
            if (options.oneofs)
                object.event = "attackerTooCloseToDefenseArea";
        }
        if (message.botInterferedPlacement != null && message.hasOwnProperty("botInterferedPlacement")) {
            object.botInterferedPlacement = $root.GameEvent.BotInterferedPlacement.toObject(message.botInterferedPlacement, options);
            if (options.oneofs)
                object.event = "botInterferedPlacement";
        }
        if (message.botCrashDrawn != null && message.hasOwnProperty("botCrashDrawn")) {
            object.botCrashDrawn = $root.GameEvent.BotCrashDrawn.toObject(message.botCrashDrawn, options);
            if (options.oneofs)
                object.event = "botCrashDrawn";
        }
        if (message.botCrashUnique != null && message.hasOwnProperty("botCrashUnique")) {
            object.botCrashUnique = $root.GameEvent.BotCrashUnique.toObject(message.botCrashUnique, options);
            if (options.oneofs)
                object.event = "botCrashUnique";
        }
        if (message.botCrashUniqueSkipped != null && message.hasOwnProperty("botCrashUniqueSkipped")) {
            object.botCrashUniqueSkipped = $root.GameEvent.BotCrashUnique.toObject(message.botCrashUniqueSkipped, options);
            if (options.oneofs)
                object.event = "botCrashUniqueSkipped";
        }
        if (message.botPushedBot != null && message.hasOwnProperty("botPushedBot")) {
            object.botPushedBot = $root.GameEvent.BotPushedBot.toObject(message.botPushedBot, options);
            if (options.oneofs)
                object.event = "botPushedBot";
        }
        if (message.botPushedBotSkipped != null && message.hasOwnProperty("botPushedBotSkipped")) {
            object.botPushedBotSkipped = $root.GameEvent.BotPushedBot.toObject(message.botPushedBotSkipped, options);
            if (options.oneofs)
                object.event = "botPushedBotSkipped";
        }
        if (message.botHeldBallDeliberately != null && message.hasOwnProperty("botHeldBallDeliberately")) {
            object.botHeldBallDeliberately = $root.GameEvent.BotHeldBallDeliberately.toObject(message.botHeldBallDeliberately, options);
            if (options.oneofs)
                object.event = "botHeldBallDeliberately";
        }
        if (message.botTippedOver != null && message.hasOwnProperty("botTippedOver")) {
            object.botTippedOver = $root.GameEvent.BotTippedOver.toObject(message.botTippedOver, options);
            if (options.oneofs)
                object.event = "botTippedOver";
        }
        if (message.botTooFastInStop != null && message.hasOwnProperty("botTooFastInStop")) {
            object.botTooFastInStop = $root.GameEvent.BotTooFastInStop.toObject(message.botTooFastInStop, options);
            if (options.oneofs)
                object.event = "botTooFastInStop";
        }
        if (message.defenderTooCloseToKickPoint != null && message.hasOwnProperty("defenderTooCloseToKickPoint")) {
            object.defenderTooCloseToKickPoint = $root.GameEvent.DefenderTooCloseToKickPoint.toObject(message.defenderTooCloseToKickPoint, options);
            if (options.oneofs)
                object.event = "defenderTooCloseToKickPoint";
        }
        if (message.defenderInDefenseAreaPartially != null && message.hasOwnProperty("defenderInDefenseAreaPartially")) {
            object.defenderInDefenseAreaPartially = $root.GameEvent.DefenderInDefenseAreaPartially.toObject(message.defenderInDefenseAreaPartially, options);
            if (options.oneofs)
                object.event = "defenderInDefenseAreaPartially";
        }
        if (message.defenderInDefenseArea != null && message.hasOwnProperty("defenderInDefenseArea")) {
            object.defenderInDefenseArea = $root.GameEvent.DefenderInDefenseArea.toObject(message.defenderInDefenseArea, options);
            if (options.oneofs)
                object.event = "defenderInDefenseArea";
        }
        if (message.multipleCards != null && message.hasOwnProperty("multipleCards")) {
            object.multipleCards = $root.GameEvent.MultipleCards.toObject(message.multipleCards, options);
            if (options.oneofs)
                object.event = "multipleCards";
        }
        if (message.multiplePlacementFailures != null && message.hasOwnProperty("multiplePlacementFailures")) {
            object.multiplePlacementFailures = $root.GameEvent.MultiplePlacementFailures.toObject(message.multiplePlacementFailures, options);
            if (options.oneofs)
                object.event = "multiplePlacementFailures";
        }
        if (message.multipleFouls != null && message.hasOwnProperty("multipleFouls")) {
            object.multipleFouls = $root.GameEvent.MultipleFouls.toObject(message.multipleFouls, options);
            if (options.oneofs)
                object.event = "multipleFouls";
        }
        if (message.unsportingBehaviorMinor != null && message.hasOwnProperty("unsportingBehaviorMinor")) {
            object.unsportingBehaviorMinor = $root.GameEvent.UnsportingBehaviorMinor.toObject(message.unsportingBehaviorMinor, options);
            if (options.oneofs)
                object.event = "unsportingBehaviorMinor";
        }
        if (message.unsportingBehaviorMajor != null && message.hasOwnProperty("unsportingBehaviorMajor")) {
            object.unsportingBehaviorMajor = $root.GameEvent.UnsportingBehaviorMajor.toObject(message.unsportingBehaviorMajor, options);
            if (options.oneofs)
                object.event = "unsportingBehaviorMajor";
        }
        if (message.botSubstitution != null && message.hasOwnProperty("botSubstitution")) {
            object.botSubstitution = $root.GameEvent.BotSubstitution.toObject(message.botSubstitution, options);
            if (options.oneofs)
                object.event = "botSubstitution";
        }
        if (message.tooManyRobots != null && message.hasOwnProperty("tooManyRobots")) {
            object.tooManyRobots = $root.GameEvent.TooManyRobots.toObject(message.tooManyRobots, options);
            if (options.oneofs)
                object.event = "tooManyRobots";
        }
        if (message.possibleGoal != null && message.hasOwnProperty("possibleGoal")) {
            object.possibleGoal = $root.GameEvent.Goal.toObject(message.possibleGoal, options);
            if (options.oneofs)
                object.event = "possibleGoal";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.GameEventType[message.type] : message.type;
        if (message.origin && message.origin.length) {
            object.origin = [];
            for (let j = 0; j < message.origin.length; ++j)
                object.origin[j] = message.origin[j];
        }
        if (message.attackerTouchedOpponentInDefenseAreaSkipped != null && message.hasOwnProperty("attackerTouchedOpponentInDefenseAreaSkipped")) {
            object.attackerTouchedOpponentInDefenseAreaSkipped = $root.GameEvent.AttackerTouchedOpponentInDefenseArea.toObject(message.attackerTouchedOpponentInDefenseAreaSkipped, options);
            if (options.oneofs)
                object.event = "attackerTouchedOpponentInDefenseAreaSkipped";
        }
        return object;
    };

    /**
     * Converts this GameEvent to JSON.
     * @function toJSON
     * @memberof GameEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    GameEvent.BallLeftField = (function() {

        /**
         * Properties of a BallLeftField.
         * @memberof GameEvent
         * @interface IBallLeftField
         * @property {Team} byTeam BallLeftField byTeam
         * @property {number|null} [byBot] BallLeftField byBot
         * @property {ILocation|null} [location] BallLeftField location
         */

        /**
         * Constructs a new BallLeftField.
         * @memberof GameEvent
         * @classdesc Represents a BallLeftField.
         * @implements IBallLeftField
         * @constructor
         * @param {GameEvent.IBallLeftField=} [properties] Properties to set
         */
        function BallLeftField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallLeftField byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BallLeftField
         * @instance
         */
        BallLeftField.prototype.byTeam = 0;

        /**
         * BallLeftField byBot.
         * @member {number} byBot
         * @memberof GameEvent.BallLeftField
         * @instance
         */
        BallLeftField.prototype.byBot = 0;

        /**
         * BallLeftField location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BallLeftField
         * @instance
         */
        BallLeftField.prototype.location = null;

        /**
         * Creates a new BallLeftField instance using the specified properties.
         * @function create
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {GameEvent.IBallLeftField=} [properties] Properties to set
         * @returns {GameEvent.BallLeftField} BallLeftField instance
         */
        BallLeftField.create = function create(properties) {
            return new BallLeftField(properties);
        };

        /**
         * Encodes the specified BallLeftField message. Does not implicitly {@link GameEvent.BallLeftField.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {GameEvent.IBallLeftField} message BallLeftField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallLeftField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BallLeftField message, length delimited. Does not implicitly {@link GameEvent.BallLeftField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {GameEvent.IBallLeftField} message BallLeftField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallLeftField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BallLeftField message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BallLeftField} BallLeftField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallLeftField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BallLeftField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BallLeftField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BallLeftField} BallLeftField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallLeftField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BallLeftField message.
         * @function verify
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BallLeftField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates a BallLeftField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BallLeftField} BallLeftField
         */
        BallLeftField.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BallLeftField)
                return object;
            let message = new $root.GameEvent.BallLeftField();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BallLeftField.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from a BallLeftField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BallLeftField
         * @static
         * @param {GameEvent.BallLeftField} message BallLeftField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallLeftField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            return object;
        };

        /**
         * Converts this BallLeftField to JSON.
         * @function toJSON
         * @memberof GameEvent.BallLeftField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallLeftField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallLeftField;
    })();

    GameEvent.AimlessKick = (function() {

        /**
         * Properties of an AimlessKick.
         * @memberof GameEvent
         * @interface IAimlessKick
         * @property {Team} byTeam AimlessKick byTeam
         * @property {number|null} [byBot] AimlessKick byBot
         * @property {ILocation|null} [location] AimlessKick location
         * @property {ILocation|null} [kickLocation] AimlessKick kickLocation
         */

        /**
         * Constructs a new AimlessKick.
         * @memberof GameEvent
         * @classdesc Represents an AimlessKick.
         * @implements IAimlessKick
         * @constructor
         * @param {GameEvent.IAimlessKick=} [properties] Properties to set
         */
        function AimlessKick(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AimlessKick byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.AimlessKick
         * @instance
         */
        AimlessKick.prototype.byTeam = 0;

        /**
         * AimlessKick byBot.
         * @member {number} byBot
         * @memberof GameEvent.AimlessKick
         * @instance
         */
        AimlessKick.prototype.byBot = 0;

        /**
         * AimlessKick location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.AimlessKick
         * @instance
         */
        AimlessKick.prototype.location = null;

        /**
         * AimlessKick kickLocation.
         * @member {ILocation|null|undefined} kickLocation
         * @memberof GameEvent.AimlessKick
         * @instance
         */
        AimlessKick.prototype.kickLocation = null;

        /**
         * Creates a new AimlessKick instance using the specified properties.
         * @function create
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {GameEvent.IAimlessKick=} [properties] Properties to set
         * @returns {GameEvent.AimlessKick} AimlessKick instance
         */
        AimlessKick.create = function create(properties) {
            return new AimlessKick(properties);
        };

        /**
         * Encodes the specified AimlessKick message. Does not implicitly {@link GameEvent.AimlessKick.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {GameEvent.IAimlessKick} message AimlessKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AimlessKick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                $root.Location.encode(message.kickLocation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AimlessKick message, length delimited. Does not implicitly {@link GameEvent.AimlessKick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {GameEvent.IAimlessKick} message AimlessKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AimlessKick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AimlessKick message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.AimlessKick} AimlessKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AimlessKick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.AimlessKick();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kickLocation = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an AimlessKick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.AimlessKick} AimlessKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AimlessKick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AimlessKick message.
         * @function verify
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AimlessKick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation")) {
                let error = $root.Location.verify(message.kickLocation);
                if (error)
                    return "kickLocation." + error;
            }
            return null;
        };

        /**
         * Creates an AimlessKick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.AimlessKick} AimlessKick
         */
        AimlessKick.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.AimlessKick)
                return object;
            let message = new $root.GameEvent.AimlessKick();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.AimlessKick.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.kickLocation != null) {
                if (typeof object.kickLocation !== "object")
                    throw TypeError(".GameEvent.AimlessKick.kickLocation: object expected");
                message.kickLocation = $root.Location.fromObject(object.kickLocation);
            }
            return message;
        };

        /**
         * Creates a plain object from an AimlessKick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.AimlessKick
         * @static
         * @param {GameEvent.AimlessKick} message AimlessKick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AimlessKick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.kickLocation = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                object.kickLocation = $root.Location.toObject(message.kickLocation, options);
            return object;
        };

        /**
         * Converts this AimlessKick to JSON.
         * @function toJSON
         * @memberof GameEvent.AimlessKick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AimlessKick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AimlessKick;
    })();

    GameEvent.Goal = (function() {

        /**
         * Properties of a Goal.
         * @memberof GameEvent
         * @interface IGoal
         * @property {Team} byTeam Goal byTeam
         * @property {Team|null} [kickingTeam] Goal kickingTeam
         * @property {number|null} [kickingBot] Goal kickingBot
         * @property {ILocation|null} [location] Goal location
         * @property {ILocation|null} [kickLocation] Goal kickLocation
         */

        /**
         * Constructs a new Goal.
         * @memberof GameEvent
         * @classdesc Represents a Goal.
         * @implements IGoal
         * @constructor
         * @param {GameEvent.IGoal=} [properties] Properties to set
         */
        function Goal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Goal byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.Goal
         * @instance
         */
        Goal.prototype.byTeam = 0;

        /**
         * Goal kickingTeam.
         * @member {Team} kickingTeam
         * @memberof GameEvent.Goal
         * @instance
         */
        Goal.prototype.kickingTeam = 0;

        /**
         * Goal kickingBot.
         * @member {number} kickingBot
         * @memberof GameEvent.Goal
         * @instance
         */
        Goal.prototype.kickingBot = 0;

        /**
         * Goal location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.Goal
         * @instance
         */
        Goal.prototype.location = null;

        /**
         * Goal kickLocation.
         * @member {ILocation|null|undefined} kickLocation
         * @memberof GameEvent.Goal
         * @instance
         */
        Goal.prototype.kickLocation = null;

        /**
         * Creates a new Goal instance using the specified properties.
         * @function create
         * @memberof GameEvent.Goal
         * @static
         * @param {GameEvent.IGoal=} [properties] Properties to set
         * @returns {GameEvent.Goal} Goal instance
         */
        Goal.create = function create(properties) {
            return new Goal(properties);
        };

        /**
         * Encodes the specified Goal message. Does not implicitly {@link GameEvent.Goal.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.Goal
         * @static
         * @param {GameEvent.IGoal} message Goal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.kickingBot != null && message.hasOwnProperty("kickingBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.kickingBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                $root.Location.encode(message.kickLocation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.kickingTeam != null && message.hasOwnProperty("kickingTeam"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.kickingTeam);
            return writer;
        };

        /**
         * Encodes the specified Goal message, length delimited. Does not implicitly {@link GameEvent.Goal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.Goal
         * @static
         * @param {GameEvent.IGoal} message Goal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Goal message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.Goal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.Goal} Goal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.Goal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 6:
                    message.kickingTeam = reader.int32();
                    break;
                case 2:
                    message.kickingBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kickLocation = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a Goal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.Goal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.Goal} Goal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Goal message.
         * @function verify
         * @memberof GameEvent.Goal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Goal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.kickingTeam != null && message.hasOwnProperty("kickingTeam"))
                switch (message.kickingTeam) {
                default:
                    return "kickingTeam: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.kickingBot != null && message.hasOwnProperty("kickingBot"))
                if (!$util.isInteger(message.kickingBot))
                    return "kickingBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation")) {
                let error = $root.Location.verify(message.kickLocation);
                if (error)
                    return "kickLocation." + error;
            }
            return null;
        };

        /**
         * Creates a Goal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.Goal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.Goal} Goal
         */
        Goal.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.Goal)
                return object;
            let message = new $root.GameEvent.Goal();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            switch (object.kickingTeam) {
            case "UNKNOWN":
            case 0:
                message.kickingTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.kickingTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.kickingTeam = 2;
                break;
            }
            if (object.kickingBot != null)
                message.kickingBot = object.kickingBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.Goal.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.kickLocation != null) {
                if (typeof object.kickLocation !== "object")
                    throw TypeError(".GameEvent.Goal.kickLocation: object expected");
                message.kickLocation = $root.Location.fromObject(object.kickLocation);
            }
            return message;
        };

        /**
         * Creates a plain object from a Goal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.Goal
         * @static
         * @param {GameEvent.Goal} message Goal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Goal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.kickingBot = 0;
                object.location = null;
                object.kickLocation = null;
                object.kickingTeam = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.kickingBot != null && message.hasOwnProperty("kickingBot"))
                object.kickingBot = message.kickingBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                object.kickLocation = $root.Location.toObject(message.kickLocation, options);
            if (message.kickingTeam != null && message.hasOwnProperty("kickingTeam"))
                object.kickingTeam = options.enums === String ? $root.Team[message.kickingTeam] : message.kickingTeam;
            return object;
        };

        /**
         * Converts this Goal to JSON.
         * @function toJSON
         * @memberof GameEvent.Goal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Goal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Goal;
    })();

    GameEvent.IndirectGoal = (function() {

        /**
         * Properties of an IndirectGoal.
         * @memberof GameEvent
         * @interface IIndirectGoal
         * @property {Team} byTeam IndirectGoal byTeam
         * @property {number|null} [byBot] IndirectGoal byBot
         * @property {ILocation|null} [location] IndirectGoal location
         * @property {ILocation|null} [kickLocation] IndirectGoal kickLocation
         */

        /**
         * Constructs a new IndirectGoal.
         * @memberof GameEvent
         * @classdesc Represents an IndirectGoal.
         * @implements IIndirectGoal
         * @constructor
         * @param {GameEvent.IIndirectGoal=} [properties] Properties to set
         */
        function IndirectGoal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IndirectGoal byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.IndirectGoal
         * @instance
         */
        IndirectGoal.prototype.byTeam = 0;

        /**
         * IndirectGoal byBot.
         * @member {number} byBot
         * @memberof GameEvent.IndirectGoal
         * @instance
         */
        IndirectGoal.prototype.byBot = 0;

        /**
         * IndirectGoal location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.IndirectGoal
         * @instance
         */
        IndirectGoal.prototype.location = null;

        /**
         * IndirectGoal kickLocation.
         * @member {ILocation|null|undefined} kickLocation
         * @memberof GameEvent.IndirectGoal
         * @instance
         */
        IndirectGoal.prototype.kickLocation = null;

        /**
         * Creates a new IndirectGoal instance using the specified properties.
         * @function create
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {GameEvent.IIndirectGoal=} [properties] Properties to set
         * @returns {GameEvent.IndirectGoal} IndirectGoal instance
         */
        IndirectGoal.create = function create(properties) {
            return new IndirectGoal(properties);
        };

        /**
         * Encodes the specified IndirectGoal message. Does not implicitly {@link GameEvent.IndirectGoal.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {GameEvent.IIndirectGoal} message IndirectGoal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IndirectGoal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                $root.Location.encode(message.kickLocation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IndirectGoal message, length delimited. Does not implicitly {@link GameEvent.IndirectGoal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {GameEvent.IIndirectGoal} message IndirectGoal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IndirectGoal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IndirectGoal message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.IndirectGoal} IndirectGoal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IndirectGoal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.IndirectGoal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kickLocation = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an IndirectGoal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.IndirectGoal} IndirectGoal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IndirectGoal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IndirectGoal message.
         * @function verify
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IndirectGoal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation")) {
                let error = $root.Location.verify(message.kickLocation);
                if (error)
                    return "kickLocation." + error;
            }
            return null;
        };

        /**
         * Creates an IndirectGoal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.IndirectGoal} IndirectGoal
         */
        IndirectGoal.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.IndirectGoal)
                return object;
            let message = new $root.GameEvent.IndirectGoal();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.IndirectGoal.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.kickLocation != null) {
                if (typeof object.kickLocation !== "object")
                    throw TypeError(".GameEvent.IndirectGoal.kickLocation: object expected");
                message.kickLocation = $root.Location.fromObject(object.kickLocation);
            }
            return message;
        };

        /**
         * Creates a plain object from an IndirectGoal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.IndirectGoal
         * @static
         * @param {GameEvent.IndirectGoal} message IndirectGoal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IndirectGoal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.kickLocation = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                object.kickLocation = $root.Location.toObject(message.kickLocation, options);
            return object;
        };

        /**
         * Converts this IndirectGoal to JSON.
         * @function toJSON
         * @memberof GameEvent.IndirectGoal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IndirectGoal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IndirectGoal;
    })();

    GameEvent.ChippedGoal = (function() {

        /**
         * Properties of a ChippedGoal.
         * @memberof GameEvent
         * @interface IChippedGoal
         * @property {Team} byTeam ChippedGoal byTeam
         * @property {number|null} [byBot] ChippedGoal byBot
         * @property {ILocation|null} [location] ChippedGoal location
         * @property {ILocation|null} [kickLocation] ChippedGoal kickLocation
         * @property {number|null} [maxBallHeight] ChippedGoal maxBallHeight
         */

        /**
         * Constructs a new ChippedGoal.
         * @memberof GameEvent
         * @classdesc Represents a ChippedGoal.
         * @implements IChippedGoal
         * @constructor
         * @param {GameEvent.IChippedGoal=} [properties] Properties to set
         */
        function ChippedGoal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChippedGoal byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.ChippedGoal
         * @instance
         */
        ChippedGoal.prototype.byTeam = 0;

        /**
         * ChippedGoal byBot.
         * @member {number} byBot
         * @memberof GameEvent.ChippedGoal
         * @instance
         */
        ChippedGoal.prototype.byBot = 0;

        /**
         * ChippedGoal location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.ChippedGoal
         * @instance
         */
        ChippedGoal.prototype.location = null;

        /**
         * ChippedGoal kickLocation.
         * @member {ILocation|null|undefined} kickLocation
         * @memberof GameEvent.ChippedGoal
         * @instance
         */
        ChippedGoal.prototype.kickLocation = null;

        /**
         * ChippedGoal maxBallHeight.
         * @member {number} maxBallHeight
         * @memberof GameEvent.ChippedGoal
         * @instance
         */
        ChippedGoal.prototype.maxBallHeight = 0;

        /**
         * Creates a new ChippedGoal instance using the specified properties.
         * @function create
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {GameEvent.IChippedGoal=} [properties] Properties to set
         * @returns {GameEvent.ChippedGoal} ChippedGoal instance
         */
        ChippedGoal.create = function create(properties) {
            return new ChippedGoal(properties);
        };

        /**
         * Encodes the specified ChippedGoal message. Does not implicitly {@link GameEvent.ChippedGoal.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {GameEvent.IChippedGoal} message ChippedGoal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChippedGoal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                $root.Location.encode(message.kickLocation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.maxBallHeight != null && message.hasOwnProperty("maxBallHeight"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.maxBallHeight);
            return writer;
        };

        /**
         * Encodes the specified ChippedGoal message, length delimited. Does not implicitly {@link GameEvent.ChippedGoal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {GameEvent.IChippedGoal} message ChippedGoal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChippedGoal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChippedGoal message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.ChippedGoal} ChippedGoal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChippedGoal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.ChippedGoal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kickLocation = $root.Location.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxBallHeight = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a ChippedGoal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.ChippedGoal} ChippedGoal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChippedGoal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChippedGoal message.
         * @function verify
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChippedGoal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation")) {
                let error = $root.Location.verify(message.kickLocation);
                if (error)
                    return "kickLocation." + error;
            }
            if (message.maxBallHeight != null && message.hasOwnProperty("maxBallHeight"))
                if (typeof message.maxBallHeight !== "number")
                    return "maxBallHeight: number expected";
            return null;
        };

        /**
         * Creates a ChippedGoal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.ChippedGoal} ChippedGoal
         */
        ChippedGoal.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.ChippedGoal)
                return object;
            let message = new $root.GameEvent.ChippedGoal();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.ChippedGoal.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.kickLocation != null) {
                if (typeof object.kickLocation !== "object")
                    throw TypeError(".GameEvent.ChippedGoal.kickLocation: object expected");
                message.kickLocation = $root.Location.fromObject(object.kickLocation);
            }
            if (object.maxBallHeight != null)
                message.maxBallHeight = Number(object.maxBallHeight);
            return message;
        };

        /**
         * Creates a plain object from a ChippedGoal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.ChippedGoal
         * @static
         * @param {GameEvent.ChippedGoal} message ChippedGoal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChippedGoal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.kickLocation = null;
                object.maxBallHeight = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.kickLocation != null && message.hasOwnProperty("kickLocation"))
                object.kickLocation = $root.Location.toObject(message.kickLocation, options);
            if (message.maxBallHeight != null && message.hasOwnProperty("maxBallHeight"))
                object.maxBallHeight = options.json && !isFinite(message.maxBallHeight) ? String(message.maxBallHeight) : message.maxBallHeight;
            return object;
        };

        /**
         * Converts this ChippedGoal to JSON.
         * @function toJSON
         * @memberof GameEvent.ChippedGoal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChippedGoal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChippedGoal;
    })();

    GameEvent.BotTooFastInStop = (function() {

        /**
         * Properties of a BotTooFastInStop.
         * @memberof GameEvent
         * @interface IBotTooFastInStop
         * @property {Team} byTeam BotTooFastInStop byTeam
         * @property {number|null} [byBot] BotTooFastInStop byBot
         * @property {ILocation|null} [location] BotTooFastInStop location
         * @property {number|null} [speed] BotTooFastInStop speed
         */

        /**
         * Constructs a new BotTooFastInStop.
         * @memberof GameEvent
         * @classdesc Represents a BotTooFastInStop.
         * @implements IBotTooFastInStop
         * @constructor
         * @param {GameEvent.IBotTooFastInStop=} [properties] Properties to set
         */
        function BotTooFastInStop(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotTooFastInStop byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotTooFastInStop
         * @instance
         */
        BotTooFastInStop.prototype.byTeam = 0;

        /**
         * BotTooFastInStop byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotTooFastInStop
         * @instance
         */
        BotTooFastInStop.prototype.byBot = 0;

        /**
         * BotTooFastInStop location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotTooFastInStop
         * @instance
         */
        BotTooFastInStop.prototype.location = null;

        /**
         * BotTooFastInStop speed.
         * @member {number} speed
         * @memberof GameEvent.BotTooFastInStop
         * @instance
         */
        BotTooFastInStop.prototype.speed = 0;

        /**
         * Creates a new BotTooFastInStop instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {GameEvent.IBotTooFastInStop=} [properties] Properties to set
         * @returns {GameEvent.BotTooFastInStop} BotTooFastInStop instance
         */
        BotTooFastInStop.create = function create(properties) {
            return new BotTooFastInStop(properties);
        };

        /**
         * Encodes the specified BotTooFastInStop message. Does not implicitly {@link GameEvent.BotTooFastInStop.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {GameEvent.IBotTooFastInStop} message BotTooFastInStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotTooFastInStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.speed);
            return writer;
        };

        /**
         * Encodes the specified BotTooFastInStop message, length delimited. Does not implicitly {@link GameEvent.BotTooFastInStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {GameEvent.IBotTooFastInStop} message BotTooFastInStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotTooFastInStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotTooFastInStop message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotTooFastInStop} BotTooFastInStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotTooFastInStop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotTooFastInStop();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.speed = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotTooFastInStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotTooFastInStop} BotTooFastInStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotTooFastInStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotTooFastInStop message.
         * @function verify
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotTooFastInStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (typeof message.speed !== "number")
                    return "speed: number expected";
            return null;
        };

        /**
         * Creates a BotTooFastInStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotTooFastInStop} BotTooFastInStop
         */
        BotTooFastInStop.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotTooFastInStop)
                return object;
            let message = new $root.GameEvent.BotTooFastInStop();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotTooFastInStop.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.speed != null)
                message.speed = Number(object.speed);
            return message;
        };

        /**
         * Creates a plain object from a BotTooFastInStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotTooFastInStop
         * @static
         * @param {GameEvent.BotTooFastInStop} message BotTooFastInStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotTooFastInStop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.speed = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
            return object;
        };

        /**
         * Converts this BotTooFastInStop to JSON.
         * @function toJSON
         * @memberof GameEvent.BotTooFastInStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotTooFastInStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotTooFastInStop;
    })();

    GameEvent.DefenderTooCloseToKickPoint = (function() {

        /**
         * Properties of a DefenderTooCloseToKickPoint.
         * @memberof GameEvent
         * @interface IDefenderTooCloseToKickPoint
         * @property {Team} byTeam DefenderTooCloseToKickPoint byTeam
         * @property {number|null} [byBot] DefenderTooCloseToKickPoint byBot
         * @property {ILocation|null} [location] DefenderTooCloseToKickPoint location
         * @property {number|null} [distance] DefenderTooCloseToKickPoint distance
         */

        /**
         * Constructs a new DefenderTooCloseToKickPoint.
         * @memberof GameEvent
         * @classdesc Represents a DefenderTooCloseToKickPoint.
         * @implements IDefenderTooCloseToKickPoint
         * @constructor
         * @param {GameEvent.IDefenderTooCloseToKickPoint=} [properties] Properties to set
         */
        function DefenderTooCloseToKickPoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefenderTooCloseToKickPoint byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @instance
         */
        DefenderTooCloseToKickPoint.prototype.byTeam = 0;

        /**
         * DefenderTooCloseToKickPoint byBot.
         * @member {number} byBot
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @instance
         */
        DefenderTooCloseToKickPoint.prototype.byBot = 0;

        /**
         * DefenderTooCloseToKickPoint location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @instance
         */
        DefenderTooCloseToKickPoint.prototype.location = null;

        /**
         * DefenderTooCloseToKickPoint distance.
         * @member {number} distance
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @instance
         */
        DefenderTooCloseToKickPoint.prototype.distance = 0;

        /**
         * Creates a new DefenderTooCloseToKickPoint instance using the specified properties.
         * @function create
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {GameEvent.IDefenderTooCloseToKickPoint=} [properties] Properties to set
         * @returns {GameEvent.DefenderTooCloseToKickPoint} DefenderTooCloseToKickPoint instance
         */
        DefenderTooCloseToKickPoint.create = function create(properties) {
            return new DefenderTooCloseToKickPoint(properties);
        };

        /**
         * Encodes the specified DefenderTooCloseToKickPoint message. Does not implicitly {@link GameEvent.DefenderTooCloseToKickPoint.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {GameEvent.IDefenderTooCloseToKickPoint} message DefenderTooCloseToKickPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderTooCloseToKickPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified DefenderTooCloseToKickPoint message, length delimited. Does not implicitly {@link GameEvent.DefenderTooCloseToKickPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {GameEvent.IDefenderTooCloseToKickPoint} message DefenderTooCloseToKickPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderTooCloseToKickPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefenderTooCloseToKickPoint message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.DefenderTooCloseToKickPoint} DefenderTooCloseToKickPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderTooCloseToKickPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.DefenderTooCloseToKickPoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a DefenderTooCloseToKickPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.DefenderTooCloseToKickPoint} DefenderTooCloseToKickPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderTooCloseToKickPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefenderTooCloseToKickPoint message.
         * @function verify
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefenderTooCloseToKickPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates a DefenderTooCloseToKickPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.DefenderTooCloseToKickPoint} DefenderTooCloseToKickPoint
         */
        DefenderTooCloseToKickPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.DefenderTooCloseToKickPoint)
                return object;
            let message = new $root.GameEvent.DefenderTooCloseToKickPoint();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.DefenderTooCloseToKickPoint.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from a DefenderTooCloseToKickPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @static
         * @param {GameEvent.DefenderTooCloseToKickPoint} message DefenderTooCloseToKickPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefenderTooCloseToKickPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this DefenderTooCloseToKickPoint to JSON.
         * @function toJSON
         * @memberof GameEvent.DefenderTooCloseToKickPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefenderTooCloseToKickPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DefenderTooCloseToKickPoint;
    })();

    GameEvent.BotCrashDrawn = (function() {

        /**
         * Properties of a BotCrashDrawn.
         * @memberof GameEvent
         * @interface IBotCrashDrawn
         * @property {number|null} [botYellow] BotCrashDrawn botYellow
         * @property {number|null} [botBlue] BotCrashDrawn botBlue
         * @property {ILocation|null} [location] BotCrashDrawn location
         * @property {number|null} [crashSpeed] BotCrashDrawn crashSpeed
         * @property {number|null} [speedDiff] BotCrashDrawn speedDiff
         * @property {number|null} [crashAngle] BotCrashDrawn crashAngle
         */

        /**
         * Constructs a new BotCrashDrawn.
         * @memberof GameEvent
         * @classdesc Represents a BotCrashDrawn.
         * @implements IBotCrashDrawn
         * @constructor
         * @param {GameEvent.IBotCrashDrawn=} [properties] Properties to set
         */
        function BotCrashDrawn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotCrashDrawn botYellow.
         * @member {number} botYellow
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.botYellow = 0;

        /**
         * BotCrashDrawn botBlue.
         * @member {number} botBlue
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.botBlue = 0;

        /**
         * BotCrashDrawn location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.location = null;

        /**
         * BotCrashDrawn crashSpeed.
         * @member {number} crashSpeed
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.crashSpeed = 0;

        /**
         * BotCrashDrawn speedDiff.
         * @member {number} speedDiff
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.speedDiff = 0;

        /**
         * BotCrashDrawn crashAngle.
         * @member {number} crashAngle
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         */
        BotCrashDrawn.prototype.crashAngle = 0;

        /**
         * Creates a new BotCrashDrawn instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {GameEvent.IBotCrashDrawn=} [properties] Properties to set
         * @returns {GameEvent.BotCrashDrawn} BotCrashDrawn instance
         */
        BotCrashDrawn.create = function create(properties) {
            return new BotCrashDrawn(properties);
        };

        /**
         * Encodes the specified BotCrashDrawn message. Does not implicitly {@link GameEvent.BotCrashDrawn.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {GameEvent.IBotCrashDrawn} message BotCrashDrawn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCrashDrawn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botYellow != null && message.hasOwnProperty("botYellow"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.botYellow);
            if (message.botBlue != null && message.hasOwnProperty("botBlue"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.botBlue);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.crashSpeed);
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.speedDiff);
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.crashAngle);
            return writer;
        };

        /**
         * Encodes the specified BotCrashDrawn message, length delimited. Does not implicitly {@link GameEvent.BotCrashDrawn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {GameEvent.IBotCrashDrawn} message BotCrashDrawn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCrashDrawn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotCrashDrawn message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotCrashDrawn} BotCrashDrawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCrashDrawn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotCrashDrawn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botYellow = reader.uint32();
                    break;
                case 2:
                    message.botBlue = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.crashSpeed = reader.float();
                    break;
                case 5:
                    message.speedDiff = reader.float();
                    break;
                case 6:
                    message.crashAngle = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotCrashDrawn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotCrashDrawn} BotCrashDrawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCrashDrawn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotCrashDrawn message.
         * @function verify
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotCrashDrawn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botYellow != null && message.hasOwnProperty("botYellow"))
                if (!$util.isInteger(message.botYellow))
                    return "botYellow: integer expected";
            if (message.botBlue != null && message.hasOwnProperty("botBlue"))
                if (!$util.isInteger(message.botBlue))
                    return "botBlue: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                if (typeof message.crashSpeed !== "number")
                    return "crashSpeed: number expected";
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                if (typeof message.speedDiff !== "number")
                    return "speedDiff: number expected";
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                if (typeof message.crashAngle !== "number")
                    return "crashAngle: number expected";
            return null;
        };

        /**
         * Creates a BotCrashDrawn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotCrashDrawn} BotCrashDrawn
         */
        BotCrashDrawn.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotCrashDrawn)
                return object;
            let message = new $root.GameEvent.BotCrashDrawn();
            if (object.botYellow != null)
                message.botYellow = object.botYellow >>> 0;
            if (object.botBlue != null)
                message.botBlue = object.botBlue >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotCrashDrawn.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.crashSpeed != null)
                message.crashSpeed = Number(object.crashSpeed);
            if (object.speedDiff != null)
                message.speedDiff = Number(object.speedDiff);
            if (object.crashAngle != null)
                message.crashAngle = Number(object.crashAngle);
            return message;
        };

        /**
         * Creates a plain object from a BotCrashDrawn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotCrashDrawn
         * @static
         * @param {GameEvent.BotCrashDrawn} message BotCrashDrawn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotCrashDrawn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.botYellow = 0;
                object.botBlue = 0;
                object.location = null;
                object.crashSpeed = 0;
                object.speedDiff = 0;
                object.crashAngle = 0;
            }
            if (message.botYellow != null && message.hasOwnProperty("botYellow"))
                object.botYellow = message.botYellow;
            if (message.botBlue != null && message.hasOwnProperty("botBlue"))
                object.botBlue = message.botBlue;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                object.crashSpeed = options.json && !isFinite(message.crashSpeed) ? String(message.crashSpeed) : message.crashSpeed;
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                object.speedDiff = options.json && !isFinite(message.speedDiff) ? String(message.speedDiff) : message.speedDiff;
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                object.crashAngle = options.json && !isFinite(message.crashAngle) ? String(message.crashAngle) : message.crashAngle;
            return object;
        };

        /**
         * Converts this BotCrashDrawn to JSON.
         * @function toJSON
         * @memberof GameEvent.BotCrashDrawn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotCrashDrawn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotCrashDrawn;
    })();

    GameEvent.BotCrashUnique = (function() {

        /**
         * Properties of a BotCrashUnique.
         * @memberof GameEvent
         * @interface IBotCrashUnique
         * @property {Team} byTeam BotCrashUnique byTeam
         * @property {number|null} [violator] BotCrashUnique violator
         * @property {number|null} [victim] BotCrashUnique victim
         * @property {ILocation|null} [location] BotCrashUnique location
         * @property {number|null} [crashSpeed] BotCrashUnique crashSpeed
         * @property {number|null} [speedDiff] BotCrashUnique speedDiff
         * @property {number|null} [crashAngle] BotCrashUnique crashAngle
         */

        /**
         * Constructs a new BotCrashUnique.
         * @memberof GameEvent
         * @classdesc Represents a BotCrashUnique.
         * @implements IBotCrashUnique
         * @constructor
         * @param {GameEvent.IBotCrashUnique=} [properties] Properties to set
         */
        function BotCrashUnique(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotCrashUnique byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.byTeam = 0;

        /**
         * BotCrashUnique violator.
         * @member {number} violator
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.violator = 0;

        /**
         * BotCrashUnique victim.
         * @member {number} victim
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.victim = 0;

        /**
         * BotCrashUnique location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.location = null;

        /**
         * BotCrashUnique crashSpeed.
         * @member {number} crashSpeed
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.crashSpeed = 0;

        /**
         * BotCrashUnique speedDiff.
         * @member {number} speedDiff
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.speedDiff = 0;

        /**
         * BotCrashUnique crashAngle.
         * @member {number} crashAngle
         * @memberof GameEvent.BotCrashUnique
         * @instance
         */
        BotCrashUnique.prototype.crashAngle = 0;

        /**
         * Creates a new BotCrashUnique instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {GameEvent.IBotCrashUnique=} [properties] Properties to set
         * @returns {GameEvent.BotCrashUnique} BotCrashUnique instance
         */
        BotCrashUnique.create = function create(properties) {
            return new BotCrashUnique(properties);
        };

        /**
         * Encodes the specified BotCrashUnique message. Does not implicitly {@link GameEvent.BotCrashUnique.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {GameEvent.IBotCrashUnique} message BotCrashUnique message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCrashUnique.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.violator != null && message.hasOwnProperty("violator"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.violator);
            if (message.victim != null && message.hasOwnProperty("victim"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.victim);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.crashSpeed);
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.speedDiff);
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.crashAngle);
            return writer;
        };

        /**
         * Encodes the specified BotCrashUnique message, length delimited. Does not implicitly {@link GameEvent.BotCrashUnique.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {GameEvent.IBotCrashUnique} message BotCrashUnique message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCrashUnique.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotCrashUnique message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotCrashUnique} BotCrashUnique
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCrashUnique.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotCrashUnique();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.violator = reader.uint32();
                    break;
                case 3:
                    message.victim = reader.uint32();
                    break;
                case 4:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.crashSpeed = reader.float();
                    break;
                case 6:
                    message.speedDiff = reader.float();
                    break;
                case 7:
                    message.crashAngle = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotCrashUnique message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotCrashUnique} BotCrashUnique
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCrashUnique.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotCrashUnique message.
         * @function verify
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotCrashUnique.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.violator != null && message.hasOwnProperty("violator"))
                if (!$util.isInteger(message.violator))
                    return "violator: integer expected";
            if (message.victim != null && message.hasOwnProperty("victim"))
                if (!$util.isInteger(message.victim))
                    return "victim: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                if (typeof message.crashSpeed !== "number")
                    return "crashSpeed: number expected";
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                if (typeof message.speedDiff !== "number")
                    return "speedDiff: number expected";
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                if (typeof message.crashAngle !== "number")
                    return "crashAngle: number expected";
            return null;
        };

        /**
         * Creates a BotCrashUnique message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotCrashUnique} BotCrashUnique
         */
        BotCrashUnique.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotCrashUnique)
                return object;
            let message = new $root.GameEvent.BotCrashUnique();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.violator != null)
                message.violator = object.violator >>> 0;
            if (object.victim != null)
                message.victim = object.victim >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotCrashUnique.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.crashSpeed != null)
                message.crashSpeed = Number(object.crashSpeed);
            if (object.speedDiff != null)
                message.speedDiff = Number(object.speedDiff);
            if (object.crashAngle != null)
                message.crashAngle = Number(object.crashAngle);
            return message;
        };

        /**
         * Creates a plain object from a BotCrashUnique message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotCrashUnique
         * @static
         * @param {GameEvent.BotCrashUnique} message BotCrashUnique
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotCrashUnique.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.violator = 0;
                object.victim = 0;
                object.location = null;
                object.crashSpeed = 0;
                object.speedDiff = 0;
                object.crashAngle = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.violator != null && message.hasOwnProperty("violator"))
                object.violator = message.violator;
            if (message.victim != null && message.hasOwnProperty("victim"))
                object.victim = message.victim;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.crashSpeed != null && message.hasOwnProperty("crashSpeed"))
                object.crashSpeed = options.json && !isFinite(message.crashSpeed) ? String(message.crashSpeed) : message.crashSpeed;
            if (message.speedDiff != null && message.hasOwnProperty("speedDiff"))
                object.speedDiff = options.json && !isFinite(message.speedDiff) ? String(message.speedDiff) : message.speedDiff;
            if (message.crashAngle != null && message.hasOwnProperty("crashAngle"))
                object.crashAngle = options.json && !isFinite(message.crashAngle) ? String(message.crashAngle) : message.crashAngle;
            return object;
        };

        /**
         * Converts this BotCrashUnique to JSON.
         * @function toJSON
         * @memberof GameEvent.BotCrashUnique
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotCrashUnique.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotCrashUnique;
    })();

    GameEvent.BotPushedBot = (function() {

        /**
         * Properties of a BotPushedBot.
         * @memberof GameEvent
         * @interface IBotPushedBot
         * @property {Team} byTeam BotPushedBot byTeam
         * @property {number|null} [violator] BotPushedBot violator
         * @property {number|null} [victim] BotPushedBot victim
         * @property {ILocation|null} [location] BotPushedBot location
         * @property {number|null} [pushedDistance] BotPushedBot pushedDistance
         */

        /**
         * Constructs a new BotPushedBot.
         * @memberof GameEvent
         * @classdesc Represents a BotPushedBot.
         * @implements IBotPushedBot
         * @constructor
         * @param {GameEvent.IBotPushedBot=} [properties] Properties to set
         */
        function BotPushedBot(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotPushedBot byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotPushedBot
         * @instance
         */
        BotPushedBot.prototype.byTeam = 0;

        /**
         * BotPushedBot violator.
         * @member {number} violator
         * @memberof GameEvent.BotPushedBot
         * @instance
         */
        BotPushedBot.prototype.violator = 0;

        /**
         * BotPushedBot victim.
         * @member {number} victim
         * @memberof GameEvent.BotPushedBot
         * @instance
         */
        BotPushedBot.prototype.victim = 0;

        /**
         * BotPushedBot location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotPushedBot
         * @instance
         */
        BotPushedBot.prototype.location = null;

        /**
         * BotPushedBot pushedDistance.
         * @member {number} pushedDistance
         * @memberof GameEvent.BotPushedBot
         * @instance
         */
        BotPushedBot.prototype.pushedDistance = 0;

        /**
         * Creates a new BotPushedBot instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {GameEvent.IBotPushedBot=} [properties] Properties to set
         * @returns {GameEvent.BotPushedBot} BotPushedBot instance
         */
        BotPushedBot.create = function create(properties) {
            return new BotPushedBot(properties);
        };

        /**
         * Encodes the specified BotPushedBot message. Does not implicitly {@link GameEvent.BotPushedBot.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {GameEvent.IBotPushedBot} message BotPushedBot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPushedBot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.violator != null && message.hasOwnProperty("violator"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.violator);
            if (message.victim != null && message.hasOwnProperty("victim"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.victim);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.pushedDistance != null && message.hasOwnProperty("pushedDistance"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.pushedDistance);
            return writer;
        };

        /**
         * Encodes the specified BotPushedBot message, length delimited. Does not implicitly {@link GameEvent.BotPushedBot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {GameEvent.IBotPushedBot} message BotPushedBot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPushedBot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotPushedBot message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotPushedBot} BotPushedBot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPushedBot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotPushedBot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.violator = reader.uint32();
                    break;
                case 3:
                    message.victim = reader.uint32();
                    break;
                case 4:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pushedDistance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotPushedBot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotPushedBot} BotPushedBot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPushedBot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotPushedBot message.
         * @function verify
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotPushedBot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.violator != null && message.hasOwnProperty("violator"))
                if (!$util.isInteger(message.violator))
                    return "violator: integer expected";
            if (message.victim != null && message.hasOwnProperty("victim"))
                if (!$util.isInteger(message.victim))
                    return "victim: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.pushedDistance != null && message.hasOwnProperty("pushedDistance"))
                if (typeof message.pushedDistance !== "number")
                    return "pushedDistance: number expected";
            return null;
        };

        /**
         * Creates a BotPushedBot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotPushedBot} BotPushedBot
         */
        BotPushedBot.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotPushedBot)
                return object;
            let message = new $root.GameEvent.BotPushedBot();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.violator != null)
                message.violator = object.violator >>> 0;
            if (object.victim != null)
                message.victim = object.victim >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotPushedBot.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.pushedDistance != null)
                message.pushedDistance = Number(object.pushedDistance);
            return message;
        };

        /**
         * Creates a plain object from a BotPushedBot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotPushedBot
         * @static
         * @param {GameEvent.BotPushedBot} message BotPushedBot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotPushedBot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.violator = 0;
                object.victim = 0;
                object.location = null;
                object.pushedDistance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.violator != null && message.hasOwnProperty("violator"))
                object.violator = message.violator;
            if (message.victim != null && message.hasOwnProperty("victim"))
                object.victim = message.victim;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.pushedDistance != null && message.hasOwnProperty("pushedDistance"))
                object.pushedDistance = options.json && !isFinite(message.pushedDistance) ? String(message.pushedDistance) : message.pushedDistance;
            return object;
        };

        /**
         * Converts this BotPushedBot to JSON.
         * @function toJSON
         * @memberof GameEvent.BotPushedBot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotPushedBot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotPushedBot;
    })();

    GameEvent.BotTippedOver = (function() {

        /**
         * Properties of a BotTippedOver.
         * @memberof GameEvent
         * @interface IBotTippedOver
         * @property {Team} byTeam BotTippedOver byTeam
         * @property {number|null} [byBot] BotTippedOver byBot
         * @property {ILocation|null} [location] BotTippedOver location
         */

        /**
         * Constructs a new BotTippedOver.
         * @memberof GameEvent
         * @classdesc Represents a BotTippedOver.
         * @implements IBotTippedOver
         * @constructor
         * @param {GameEvent.IBotTippedOver=} [properties] Properties to set
         */
        function BotTippedOver(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotTippedOver byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotTippedOver
         * @instance
         */
        BotTippedOver.prototype.byTeam = 0;

        /**
         * BotTippedOver byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotTippedOver
         * @instance
         */
        BotTippedOver.prototype.byBot = 0;

        /**
         * BotTippedOver location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotTippedOver
         * @instance
         */
        BotTippedOver.prototype.location = null;

        /**
         * Creates a new BotTippedOver instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {GameEvent.IBotTippedOver=} [properties] Properties to set
         * @returns {GameEvent.BotTippedOver} BotTippedOver instance
         */
        BotTippedOver.create = function create(properties) {
            return new BotTippedOver(properties);
        };

        /**
         * Encodes the specified BotTippedOver message. Does not implicitly {@link GameEvent.BotTippedOver.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {GameEvent.IBotTippedOver} message BotTippedOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotTippedOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BotTippedOver message, length delimited. Does not implicitly {@link GameEvent.BotTippedOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {GameEvent.IBotTippedOver} message BotTippedOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotTippedOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotTippedOver message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotTippedOver} BotTippedOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotTippedOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotTippedOver();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotTippedOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotTippedOver} BotTippedOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotTippedOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotTippedOver message.
         * @function verify
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotTippedOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates a BotTippedOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotTippedOver} BotTippedOver
         */
        BotTippedOver.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotTippedOver)
                return object;
            let message = new $root.GameEvent.BotTippedOver();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotTippedOver.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from a BotTippedOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotTippedOver
         * @static
         * @param {GameEvent.BotTippedOver} message BotTippedOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotTippedOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            return object;
        };

        /**
         * Converts this BotTippedOver to JSON.
         * @function toJSON
         * @memberof GameEvent.BotTippedOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotTippedOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotTippedOver;
    })();

    GameEvent.DefenderInDefenseArea = (function() {

        /**
         * Properties of a DefenderInDefenseArea.
         * @memberof GameEvent
         * @interface IDefenderInDefenseArea
         * @property {Team} byTeam DefenderInDefenseArea byTeam
         * @property {number|null} [byBot] DefenderInDefenseArea byBot
         * @property {ILocation|null} [location] DefenderInDefenseArea location
         * @property {number|null} [distance] DefenderInDefenseArea distance
         */

        /**
         * Constructs a new DefenderInDefenseArea.
         * @memberof GameEvent
         * @classdesc Represents a DefenderInDefenseArea.
         * @implements IDefenderInDefenseArea
         * @constructor
         * @param {GameEvent.IDefenderInDefenseArea=} [properties] Properties to set
         */
        function DefenderInDefenseArea(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefenderInDefenseArea byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.DefenderInDefenseArea
         * @instance
         */
        DefenderInDefenseArea.prototype.byTeam = 0;

        /**
         * DefenderInDefenseArea byBot.
         * @member {number} byBot
         * @memberof GameEvent.DefenderInDefenseArea
         * @instance
         */
        DefenderInDefenseArea.prototype.byBot = 0;

        /**
         * DefenderInDefenseArea location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.DefenderInDefenseArea
         * @instance
         */
        DefenderInDefenseArea.prototype.location = null;

        /**
         * DefenderInDefenseArea distance.
         * @member {number} distance
         * @memberof GameEvent.DefenderInDefenseArea
         * @instance
         */
        DefenderInDefenseArea.prototype.distance = 0;

        /**
         * Creates a new DefenderInDefenseArea instance using the specified properties.
         * @function create
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {GameEvent.IDefenderInDefenseArea=} [properties] Properties to set
         * @returns {GameEvent.DefenderInDefenseArea} DefenderInDefenseArea instance
         */
        DefenderInDefenseArea.create = function create(properties) {
            return new DefenderInDefenseArea(properties);
        };

        /**
         * Encodes the specified DefenderInDefenseArea message. Does not implicitly {@link GameEvent.DefenderInDefenseArea.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {GameEvent.IDefenderInDefenseArea} message DefenderInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderInDefenseArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified DefenderInDefenseArea message, length delimited. Does not implicitly {@link GameEvent.DefenderInDefenseArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {GameEvent.IDefenderInDefenseArea} message DefenderInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderInDefenseArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefenderInDefenseArea message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.DefenderInDefenseArea} DefenderInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderInDefenseArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.DefenderInDefenseArea();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a DefenderInDefenseArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.DefenderInDefenseArea} DefenderInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderInDefenseArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefenderInDefenseArea message.
         * @function verify
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefenderInDefenseArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates a DefenderInDefenseArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.DefenderInDefenseArea} DefenderInDefenseArea
         */
        DefenderInDefenseArea.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.DefenderInDefenseArea)
                return object;
            let message = new $root.GameEvent.DefenderInDefenseArea();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.DefenderInDefenseArea.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from a DefenderInDefenseArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.DefenderInDefenseArea
         * @static
         * @param {GameEvent.DefenderInDefenseArea} message DefenderInDefenseArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefenderInDefenseArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this DefenderInDefenseArea to JSON.
         * @function toJSON
         * @memberof GameEvent.DefenderInDefenseArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefenderInDefenseArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DefenderInDefenseArea;
    })();

    GameEvent.DefenderInDefenseAreaPartially = (function() {

        /**
         * Properties of a DefenderInDefenseAreaPartially.
         * @memberof GameEvent
         * @interface IDefenderInDefenseAreaPartially
         * @property {Team} byTeam DefenderInDefenseAreaPartially byTeam
         * @property {number|null} [byBot] DefenderInDefenseAreaPartially byBot
         * @property {ILocation|null} [location] DefenderInDefenseAreaPartially location
         * @property {number|null} [distance] DefenderInDefenseAreaPartially distance
         */

        /**
         * Constructs a new DefenderInDefenseAreaPartially.
         * @memberof GameEvent
         * @classdesc Represents a DefenderInDefenseAreaPartially.
         * @implements IDefenderInDefenseAreaPartially
         * @constructor
         * @param {GameEvent.IDefenderInDefenseAreaPartially=} [properties] Properties to set
         */
        function DefenderInDefenseAreaPartially(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefenderInDefenseAreaPartially byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @instance
         */
        DefenderInDefenseAreaPartially.prototype.byTeam = 0;

        /**
         * DefenderInDefenseAreaPartially byBot.
         * @member {number} byBot
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @instance
         */
        DefenderInDefenseAreaPartially.prototype.byBot = 0;

        /**
         * DefenderInDefenseAreaPartially location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @instance
         */
        DefenderInDefenseAreaPartially.prototype.location = null;

        /**
         * DefenderInDefenseAreaPartially distance.
         * @member {number} distance
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @instance
         */
        DefenderInDefenseAreaPartially.prototype.distance = 0;

        /**
         * Creates a new DefenderInDefenseAreaPartially instance using the specified properties.
         * @function create
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {GameEvent.IDefenderInDefenseAreaPartially=} [properties] Properties to set
         * @returns {GameEvent.DefenderInDefenseAreaPartially} DefenderInDefenseAreaPartially instance
         */
        DefenderInDefenseAreaPartially.create = function create(properties) {
            return new DefenderInDefenseAreaPartially(properties);
        };

        /**
         * Encodes the specified DefenderInDefenseAreaPartially message. Does not implicitly {@link GameEvent.DefenderInDefenseAreaPartially.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {GameEvent.IDefenderInDefenseAreaPartially} message DefenderInDefenseAreaPartially message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderInDefenseAreaPartially.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified DefenderInDefenseAreaPartially message, length delimited. Does not implicitly {@link GameEvent.DefenderInDefenseAreaPartially.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {GameEvent.IDefenderInDefenseAreaPartially} message DefenderInDefenseAreaPartially message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefenderInDefenseAreaPartially.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefenderInDefenseAreaPartially message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.DefenderInDefenseAreaPartially} DefenderInDefenseAreaPartially
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderInDefenseAreaPartially.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.DefenderInDefenseAreaPartially();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a DefenderInDefenseAreaPartially message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.DefenderInDefenseAreaPartially} DefenderInDefenseAreaPartially
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefenderInDefenseAreaPartially.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefenderInDefenseAreaPartially message.
         * @function verify
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefenderInDefenseAreaPartially.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates a DefenderInDefenseAreaPartially message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.DefenderInDefenseAreaPartially} DefenderInDefenseAreaPartially
         */
        DefenderInDefenseAreaPartially.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.DefenderInDefenseAreaPartially)
                return object;
            let message = new $root.GameEvent.DefenderInDefenseAreaPartially();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.DefenderInDefenseAreaPartially.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from a DefenderInDefenseAreaPartially message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @static
         * @param {GameEvent.DefenderInDefenseAreaPartially} message DefenderInDefenseAreaPartially
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefenderInDefenseAreaPartially.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this DefenderInDefenseAreaPartially to JSON.
         * @function toJSON
         * @memberof GameEvent.DefenderInDefenseAreaPartially
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefenderInDefenseAreaPartially.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DefenderInDefenseAreaPartially;
    })();

    GameEvent.AttackerTouchedBallInDefenseArea = (function() {

        /**
         * Properties of an AttackerTouchedBallInDefenseArea.
         * @memberof GameEvent
         * @interface IAttackerTouchedBallInDefenseArea
         * @property {Team} byTeam AttackerTouchedBallInDefenseArea byTeam
         * @property {number|null} [byBot] AttackerTouchedBallInDefenseArea byBot
         * @property {ILocation|null} [location] AttackerTouchedBallInDefenseArea location
         * @property {number|null} [distance] AttackerTouchedBallInDefenseArea distance
         */

        /**
         * Constructs a new AttackerTouchedBallInDefenseArea.
         * @memberof GameEvent
         * @classdesc Represents an AttackerTouchedBallInDefenseArea.
         * @implements IAttackerTouchedBallInDefenseArea
         * @constructor
         * @param {GameEvent.IAttackerTouchedBallInDefenseArea=} [properties] Properties to set
         */
        function AttackerTouchedBallInDefenseArea(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttackerTouchedBallInDefenseArea byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @instance
         */
        AttackerTouchedBallInDefenseArea.prototype.byTeam = 0;

        /**
         * AttackerTouchedBallInDefenseArea byBot.
         * @member {number} byBot
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @instance
         */
        AttackerTouchedBallInDefenseArea.prototype.byBot = 0;

        /**
         * AttackerTouchedBallInDefenseArea location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @instance
         */
        AttackerTouchedBallInDefenseArea.prototype.location = null;

        /**
         * AttackerTouchedBallInDefenseArea distance.
         * @member {number} distance
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @instance
         */
        AttackerTouchedBallInDefenseArea.prototype.distance = 0;

        /**
         * Creates a new AttackerTouchedBallInDefenseArea instance using the specified properties.
         * @function create
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedBallInDefenseArea=} [properties] Properties to set
         * @returns {GameEvent.AttackerTouchedBallInDefenseArea} AttackerTouchedBallInDefenseArea instance
         */
        AttackerTouchedBallInDefenseArea.create = function create(properties) {
            return new AttackerTouchedBallInDefenseArea(properties);
        };

        /**
         * Encodes the specified AttackerTouchedBallInDefenseArea message. Does not implicitly {@link GameEvent.AttackerTouchedBallInDefenseArea.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedBallInDefenseArea} message AttackerTouchedBallInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTouchedBallInDefenseArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified AttackerTouchedBallInDefenseArea message, length delimited. Does not implicitly {@link GameEvent.AttackerTouchedBallInDefenseArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedBallInDefenseArea} message AttackerTouchedBallInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTouchedBallInDefenseArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttackerTouchedBallInDefenseArea message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.AttackerTouchedBallInDefenseArea} AttackerTouchedBallInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTouchedBallInDefenseArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.AttackerTouchedBallInDefenseArea();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttackerTouchedBallInDefenseArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.AttackerTouchedBallInDefenseArea} AttackerTouchedBallInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTouchedBallInDefenseArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttackerTouchedBallInDefenseArea message.
         * @function verify
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttackerTouchedBallInDefenseArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates an AttackerTouchedBallInDefenseArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.AttackerTouchedBallInDefenseArea} AttackerTouchedBallInDefenseArea
         */
        AttackerTouchedBallInDefenseArea.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.AttackerTouchedBallInDefenseArea)
                return object;
            let message = new $root.GameEvent.AttackerTouchedBallInDefenseArea();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.AttackerTouchedBallInDefenseArea.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from an AttackerTouchedBallInDefenseArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @static
         * @param {GameEvent.AttackerTouchedBallInDefenseArea} message AttackerTouchedBallInDefenseArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttackerTouchedBallInDefenseArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this AttackerTouchedBallInDefenseArea to JSON.
         * @function toJSON
         * @memberof GameEvent.AttackerTouchedBallInDefenseArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttackerTouchedBallInDefenseArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttackerTouchedBallInDefenseArea;
    })();

    GameEvent.BotKickedBallTooFast = (function() {

        /**
         * Properties of a BotKickedBallTooFast.
         * @memberof GameEvent
         * @interface IBotKickedBallTooFast
         * @property {Team} byTeam BotKickedBallTooFast byTeam
         * @property {number|null} [byBot] BotKickedBallTooFast byBot
         * @property {ILocation|null} [location] BotKickedBallTooFast location
         * @property {number|null} [initialBallSpeed] BotKickedBallTooFast initialBallSpeed
         * @property {boolean|null} [chipped] BotKickedBallTooFast chipped
         */

        /**
         * Constructs a new BotKickedBallTooFast.
         * @memberof GameEvent
         * @classdesc Represents a BotKickedBallTooFast.
         * @implements IBotKickedBallTooFast
         * @constructor
         * @param {GameEvent.IBotKickedBallTooFast=} [properties] Properties to set
         */
        function BotKickedBallTooFast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotKickedBallTooFast byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         */
        BotKickedBallTooFast.prototype.byTeam = 0;

        /**
         * BotKickedBallTooFast byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         */
        BotKickedBallTooFast.prototype.byBot = 0;

        /**
         * BotKickedBallTooFast location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         */
        BotKickedBallTooFast.prototype.location = null;

        /**
         * BotKickedBallTooFast initialBallSpeed.
         * @member {number} initialBallSpeed
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         */
        BotKickedBallTooFast.prototype.initialBallSpeed = 0;

        /**
         * BotKickedBallTooFast chipped.
         * @member {boolean} chipped
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         */
        BotKickedBallTooFast.prototype.chipped = false;

        /**
         * Creates a new BotKickedBallTooFast instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {GameEvent.IBotKickedBallTooFast=} [properties] Properties to set
         * @returns {GameEvent.BotKickedBallTooFast} BotKickedBallTooFast instance
         */
        BotKickedBallTooFast.create = function create(properties) {
            return new BotKickedBallTooFast(properties);
        };

        /**
         * Encodes the specified BotKickedBallTooFast message. Does not implicitly {@link GameEvent.BotKickedBallTooFast.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {GameEvent.IBotKickedBallTooFast} message BotKickedBallTooFast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotKickedBallTooFast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.initialBallSpeed);
            if (message.chipped != null && message.hasOwnProperty("chipped"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.chipped);
            return writer;
        };

        /**
         * Encodes the specified BotKickedBallTooFast message, length delimited. Does not implicitly {@link GameEvent.BotKickedBallTooFast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {GameEvent.IBotKickedBallTooFast} message BotKickedBallTooFast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotKickedBallTooFast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotKickedBallTooFast message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotKickedBallTooFast} BotKickedBallTooFast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotKickedBallTooFast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotKickedBallTooFast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.initialBallSpeed = reader.float();
                    break;
                case 5:
                    message.chipped = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotKickedBallTooFast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotKickedBallTooFast} BotKickedBallTooFast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotKickedBallTooFast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotKickedBallTooFast message.
         * @function verify
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotKickedBallTooFast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
                if (typeof message.initialBallSpeed !== "number")
                    return "initialBallSpeed: number expected";
            if (message.chipped != null && message.hasOwnProperty("chipped"))
                if (typeof message.chipped !== "boolean")
                    return "chipped: boolean expected";
            return null;
        };

        /**
         * Creates a BotKickedBallTooFast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotKickedBallTooFast} BotKickedBallTooFast
         */
        BotKickedBallTooFast.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotKickedBallTooFast)
                return object;
            let message = new $root.GameEvent.BotKickedBallTooFast();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotKickedBallTooFast.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.initialBallSpeed != null)
                message.initialBallSpeed = Number(object.initialBallSpeed);
            if (object.chipped != null)
                message.chipped = Boolean(object.chipped);
            return message;
        };

        /**
         * Creates a plain object from a BotKickedBallTooFast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotKickedBallTooFast
         * @static
         * @param {GameEvent.BotKickedBallTooFast} message BotKickedBallTooFast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotKickedBallTooFast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.initialBallSpeed = 0;
                object.chipped = false;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.initialBallSpeed != null && message.hasOwnProperty("initialBallSpeed"))
                object.initialBallSpeed = options.json && !isFinite(message.initialBallSpeed) ? String(message.initialBallSpeed) : message.initialBallSpeed;
            if (message.chipped != null && message.hasOwnProperty("chipped"))
                object.chipped = message.chipped;
            return object;
        };

        /**
         * Converts this BotKickedBallTooFast to JSON.
         * @function toJSON
         * @memberof GameEvent.BotKickedBallTooFast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotKickedBallTooFast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotKickedBallTooFast;
    })();

    GameEvent.BotDribbledBallTooFar = (function() {

        /**
         * Properties of a BotDribbledBallTooFar.
         * @memberof GameEvent
         * @interface IBotDribbledBallTooFar
         * @property {Team} byTeam BotDribbledBallTooFar byTeam
         * @property {number|null} [byBot] BotDribbledBallTooFar byBot
         * @property {ILocation|null} [start] BotDribbledBallTooFar start
         * @property {ILocation|null} [end] BotDribbledBallTooFar end
         */

        /**
         * Constructs a new BotDribbledBallTooFar.
         * @memberof GameEvent
         * @classdesc Represents a BotDribbledBallTooFar.
         * @implements IBotDribbledBallTooFar
         * @constructor
         * @param {GameEvent.IBotDribbledBallTooFar=} [properties] Properties to set
         */
        function BotDribbledBallTooFar(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotDribbledBallTooFar byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotDribbledBallTooFar
         * @instance
         */
        BotDribbledBallTooFar.prototype.byTeam = 0;

        /**
         * BotDribbledBallTooFar byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotDribbledBallTooFar
         * @instance
         */
        BotDribbledBallTooFar.prototype.byBot = 0;

        /**
         * BotDribbledBallTooFar start.
         * @member {ILocation|null|undefined} start
         * @memberof GameEvent.BotDribbledBallTooFar
         * @instance
         */
        BotDribbledBallTooFar.prototype.start = null;

        /**
         * BotDribbledBallTooFar end.
         * @member {ILocation|null|undefined} end
         * @memberof GameEvent.BotDribbledBallTooFar
         * @instance
         */
        BotDribbledBallTooFar.prototype.end = null;

        /**
         * Creates a new BotDribbledBallTooFar instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {GameEvent.IBotDribbledBallTooFar=} [properties] Properties to set
         * @returns {GameEvent.BotDribbledBallTooFar} BotDribbledBallTooFar instance
         */
        BotDribbledBallTooFar.create = function create(properties) {
            return new BotDribbledBallTooFar(properties);
        };

        /**
         * Encodes the specified BotDribbledBallTooFar message. Does not implicitly {@link GameEvent.BotDribbledBallTooFar.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {GameEvent.IBotDribbledBallTooFar} message BotDribbledBallTooFar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotDribbledBallTooFar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.start != null && message.hasOwnProperty("start"))
                $root.Location.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.end != null && message.hasOwnProperty("end"))
                $root.Location.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BotDribbledBallTooFar message, length delimited. Does not implicitly {@link GameEvent.BotDribbledBallTooFar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {GameEvent.IBotDribbledBallTooFar} message BotDribbledBallTooFar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotDribbledBallTooFar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotDribbledBallTooFar message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotDribbledBallTooFar} BotDribbledBallTooFar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotDribbledBallTooFar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotDribbledBallTooFar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.start = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.end = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotDribbledBallTooFar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotDribbledBallTooFar} BotDribbledBallTooFar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotDribbledBallTooFar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotDribbledBallTooFar message.
         * @function verify
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotDribbledBallTooFar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.start != null && message.hasOwnProperty("start")) {
                let error = $root.Location.verify(message.start);
                if (error)
                    return "start." + error;
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                let error = $root.Location.verify(message.end);
                if (error)
                    return "end." + error;
            }
            return null;
        };

        /**
         * Creates a BotDribbledBallTooFar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotDribbledBallTooFar} BotDribbledBallTooFar
         */
        BotDribbledBallTooFar.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotDribbledBallTooFar)
                return object;
            let message = new $root.GameEvent.BotDribbledBallTooFar();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".GameEvent.BotDribbledBallTooFar.start: object expected");
                message.start = $root.Location.fromObject(object.start);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".GameEvent.BotDribbledBallTooFar.end: object expected");
                message.end = $root.Location.fromObject(object.end);
            }
            return message;
        };

        /**
         * Creates a plain object from a BotDribbledBallTooFar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotDribbledBallTooFar
         * @static
         * @param {GameEvent.BotDribbledBallTooFar} message BotDribbledBallTooFar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotDribbledBallTooFar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.start = null;
                object.end = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.Location.toObject(message.start, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.Location.toObject(message.end, options);
            return object;
        };

        /**
         * Converts this BotDribbledBallTooFar to JSON.
         * @function toJSON
         * @memberof GameEvent.BotDribbledBallTooFar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotDribbledBallTooFar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotDribbledBallTooFar;
    })();

    GameEvent.AttackerTouchedOpponentInDefenseArea = (function() {

        /**
         * Properties of an AttackerTouchedOpponentInDefenseArea.
         * @memberof GameEvent
         * @interface IAttackerTouchedOpponentInDefenseArea
         * @property {Team} byTeam AttackerTouchedOpponentInDefenseArea byTeam
         * @property {number|null} [byBot] AttackerTouchedOpponentInDefenseArea byBot
         * @property {number|null} [victim] AttackerTouchedOpponentInDefenseArea victim
         * @property {ILocation|null} [location] AttackerTouchedOpponentInDefenseArea location
         */

        /**
         * Constructs a new AttackerTouchedOpponentInDefenseArea.
         * @memberof GameEvent
         * @classdesc Represents an AttackerTouchedOpponentInDefenseArea.
         * @implements IAttackerTouchedOpponentInDefenseArea
         * @constructor
         * @param {GameEvent.IAttackerTouchedOpponentInDefenseArea=} [properties] Properties to set
         */
        function AttackerTouchedOpponentInDefenseArea(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttackerTouchedOpponentInDefenseArea byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @instance
         */
        AttackerTouchedOpponentInDefenseArea.prototype.byTeam = 0;

        /**
         * AttackerTouchedOpponentInDefenseArea byBot.
         * @member {number} byBot
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @instance
         */
        AttackerTouchedOpponentInDefenseArea.prototype.byBot = 0;

        /**
         * AttackerTouchedOpponentInDefenseArea victim.
         * @member {number} victim
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @instance
         */
        AttackerTouchedOpponentInDefenseArea.prototype.victim = 0;

        /**
         * AttackerTouchedOpponentInDefenseArea location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @instance
         */
        AttackerTouchedOpponentInDefenseArea.prototype.location = null;

        /**
         * Creates a new AttackerTouchedOpponentInDefenseArea instance using the specified properties.
         * @function create
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedOpponentInDefenseArea=} [properties] Properties to set
         * @returns {GameEvent.AttackerTouchedOpponentInDefenseArea} AttackerTouchedOpponentInDefenseArea instance
         */
        AttackerTouchedOpponentInDefenseArea.create = function create(properties) {
            return new AttackerTouchedOpponentInDefenseArea(properties);
        };

        /**
         * Encodes the specified AttackerTouchedOpponentInDefenseArea message. Does not implicitly {@link GameEvent.AttackerTouchedOpponentInDefenseArea.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedOpponentInDefenseArea} message AttackerTouchedOpponentInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTouchedOpponentInDefenseArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.victim != null && message.hasOwnProperty("victim"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.victim);
            return writer;
        };

        /**
         * Encodes the specified AttackerTouchedOpponentInDefenseArea message, length delimited. Does not implicitly {@link GameEvent.AttackerTouchedOpponentInDefenseArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {GameEvent.IAttackerTouchedOpponentInDefenseArea} message AttackerTouchedOpponentInDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTouchedOpponentInDefenseArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttackerTouchedOpponentInDefenseArea message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.AttackerTouchedOpponentInDefenseArea} AttackerTouchedOpponentInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTouchedOpponentInDefenseArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.AttackerTouchedOpponentInDefenseArea();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 4:
                    message.victim = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttackerTouchedOpponentInDefenseArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.AttackerTouchedOpponentInDefenseArea} AttackerTouchedOpponentInDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTouchedOpponentInDefenseArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttackerTouchedOpponentInDefenseArea message.
         * @function verify
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttackerTouchedOpponentInDefenseArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.victim != null && message.hasOwnProperty("victim"))
                if (!$util.isInteger(message.victim))
                    return "victim: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates an AttackerTouchedOpponentInDefenseArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.AttackerTouchedOpponentInDefenseArea} AttackerTouchedOpponentInDefenseArea
         */
        AttackerTouchedOpponentInDefenseArea.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.AttackerTouchedOpponentInDefenseArea)
                return object;
            let message = new $root.GameEvent.AttackerTouchedOpponentInDefenseArea();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.victim != null)
                message.victim = object.victim >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.AttackerTouchedOpponentInDefenseArea.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from an AttackerTouchedOpponentInDefenseArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @static
         * @param {GameEvent.AttackerTouchedOpponentInDefenseArea} message AttackerTouchedOpponentInDefenseArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttackerTouchedOpponentInDefenseArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.victim = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.victim != null && message.hasOwnProperty("victim"))
                object.victim = message.victim;
            return object;
        };

        /**
         * Converts this AttackerTouchedOpponentInDefenseArea to JSON.
         * @function toJSON
         * @memberof GameEvent.AttackerTouchedOpponentInDefenseArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttackerTouchedOpponentInDefenseArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttackerTouchedOpponentInDefenseArea;
    })();

    GameEvent.AttackerDoubleTouchedBall = (function() {

        /**
         * Properties of an AttackerDoubleTouchedBall.
         * @memberof GameEvent
         * @interface IAttackerDoubleTouchedBall
         * @property {Team} byTeam AttackerDoubleTouchedBall byTeam
         * @property {number|null} [byBot] AttackerDoubleTouchedBall byBot
         * @property {ILocation|null} [location] AttackerDoubleTouchedBall location
         */

        /**
         * Constructs a new AttackerDoubleTouchedBall.
         * @memberof GameEvent
         * @classdesc Represents an AttackerDoubleTouchedBall.
         * @implements IAttackerDoubleTouchedBall
         * @constructor
         * @param {GameEvent.IAttackerDoubleTouchedBall=} [properties] Properties to set
         */
        function AttackerDoubleTouchedBall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttackerDoubleTouchedBall byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @instance
         */
        AttackerDoubleTouchedBall.prototype.byTeam = 0;

        /**
         * AttackerDoubleTouchedBall byBot.
         * @member {number} byBot
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @instance
         */
        AttackerDoubleTouchedBall.prototype.byBot = 0;

        /**
         * AttackerDoubleTouchedBall location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @instance
         */
        AttackerDoubleTouchedBall.prototype.location = null;

        /**
         * Creates a new AttackerDoubleTouchedBall instance using the specified properties.
         * @function create
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {GameEvent.IAttackerDoubleTouchedBall=} [properties] Properties to set
         * @returns {GameEvent.AttackerDoubleTouchedBall} AttackerDoubleTouchedBall instance
         */
        AttackerDoubleTouchedBall.create = function create(properties) {
            return new AttackerDoubleTouchedBall(properties);
        };

        /**
         * Encodes the specified AttackerDoubleTouchedBall message. Does not implicitly {@link GameEvent.AttackerDoubleTouchedBall.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {GameEvent.IAttackerDoubleTouchedBall} message AttackerDoubleTouchedBall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerDoubleTouchedBall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttackerDoubleTouchedBall message, length delimited. Does not implicitly {@link GameEvent.AttackerDoubleTouchedBall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {GameEvent.IAttackerDoubleTouchedBall} message AttackerDoubleTouchedBall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerDoubleTouchedBall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttackerDoubleTouchedBall message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.AttackerDoubleTouchedBall} AttackerDoubleTouchedBall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerDoubleTouchedBall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.AttackerDoubleTouchedBall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttackerDoubleTouchedBall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.AttackerDoubleTouchedBall} AttackerDoubleTouchedBall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerDoubleTouchedBall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttackerDoubleTouchedBall message.
         * @function verify
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttackerDoubleTouchedBall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates an AttackerDoubleTouchedBall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.AttackerDoubleTouchedBall} AttackerDoubleTouchedBall
         */
        AttackerDoubleTouchedBall.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.AttackerDoubleTouchedBall)
                return object;
            let message = new $root.GameEvent.AttackerDoubleTouchedBall();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.AttackerDoubleTouchedBall.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from an AttackerDoubleTouchedBall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @static
         * @param {GameEvent.AttackerDoubleTouchedBall} message AttackerDoubleTouchedBall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttackerDoubleTouchedBall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            return object;
        };

        /**
         * Converts this AttackerDoubleTouchedBall to JSON.
         * @function toJSON
         * @memberof GameEvent.AttackerDoubleTouchedBall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttackerDoubleTouchedBall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttackerDoubleTouchedBall;
    })();

    GameEvent.AttackerTooCloseToDefenseArea = (function() {

        /**
         * Properties of an AttackerTooCloseToDefenseArea.
         * @memberof GameEvent
         * @interface IAttackerTooCloseToDefenseArea
         * @property {Team} byTeam AttackerTooCloseToDefenseArea byTeam
         * @property {number|null} [byBot] AttackerTooCloseToDefenseArea byBot
         * @property {ILocation|null} [location] AttackerTooCloseToDefenseArea location
         * @property {number|null} [distance] AttackerTooCloseToDefenseArea distance
         */

        /**
         * Constructs a new AttackerTooCloseToDefenseArea.
         * @memberof GameEvent
         * @classdesc Represents an AttackerTooCloseToDefenseArea.
         * @implements IAttackerTooCloseToDefenseArea
         * @constructor
         * @param {GameEvent.IAttackerTooCloseToDefenseArea=} [properties] Properties to set
         */
        function AttackerTooCloseToDefenseArea(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttackerTooCloseToDefenseArea byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @instance
         */
        AttackerTooCloseToDefenseArea.prototype.byTeam = 0;

        /**
         * AttackerTooCloseToDefenseArea byBot.
         * @member {number} byBot
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @instance
         */
        AttackerTooCloseToDefenseArea.prototype.byBot = 0;

        /**
         * AttackerTooCloseToDefenseArea location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @instance
         */
        AttackerTooCloseToDefenseArea.prototype.location = null;

        /**
         * AttackerTooCloseToDefenseArea distance.
         * @member {number} distance
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @instance
         */
        AttackerTooCloseToDefenseArea.prototype.distance = 0;

        /**
         * Creates a new AttackerTooCloseToDefenseArea instance using the specified properties.
         * @function create
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {GameEvent.IAttackerTooCloseToDefenseArea=} [properties] Properties to set
         * @returns {GameEvent.AttackerTooCloseToDefenseArea} AttackerTooCloseToDefenseArea instance
         */
        AttackerTooCloseToDefenseArea.create = function create(properties) {
            return new AttackerTooCloseToDefenseArea(properties);
        };

        /**
         * Encodes the specified AttackerTooCloseToDefenseArea message. Does not implicitly {@link GameEvent.AttackerTooCloseToDefenseArea.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {GameEvent.IAttackerTooCloseToDefenseArea} message AttackerTooCloseToDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTooCloseToDefenseArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified AttackerTooCloseToDefenseArea message, length delimited. Does not implicitly {@link GameEvent.AttackerTooCloseToDefenseArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {GameEvent.IAttackerTooCloseToDefenseArea} message AttackerTooCloseToDefenseArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttackerTooCloseToDefenseArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttackerTooCloseToDefenseArea message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.AttackerTooCloseToDefenseArea} AttackerTooCloseToDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTooCloseToDefenseArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.AttackerTooCloseToDefenseArea();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttackerTooCloseToDefenseArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.AttackerTooCloseToDefenseArea} AttackerTooCloseToDefenseArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttackerTooCloseToDefenseArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttackerTooCloseToDefenseArea message.
         * @function verify
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttackerTooCloseToDefenseArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates an AttackerTooCloseToDefenseArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.AttackerTooCloseToDefenseArea} AttackerTooCloseToDefenseArea
         */
        AttackerTooCloseToDefenseArea.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.AttackerTooCloseToDefenseArea)
                return object;
            let message = new $root.GameEvent.AttackerTooCloseToDefenseArea();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.AttackerTooCloseToDefenseArea.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from an AttackerTooCloseToDefenseArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @static
         * @param {GameEvent.AttackerTooCloseToDefenseArea} message AttackerTooCloseToDefenseArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttackerTooCloseToDefenseArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this AttackerTooCloseToDefenseArea to JSON.
         * @function toJSON
         * @memberof GameEvent.AttackerTooCloseToDefenseArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttackerTooCloseToDefenseArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttackerTooCloseToDefenseArea;
    })();

    GameEvent.BotHeldBallDeliberately = (function() {

        /**
         * Properties of a BotHeldBallDeliberately.
         * @memberof GameEvent
         * @interface IBotHeldBallDeliberately
         * @property {Team} byTeam BotHeldBallDeliberately byTeam
         * @property {number|null} [byBot] BotHeldBallDeliberately byBot
         * @property {ILocation|null} [location] BotHeldBallDeliberately location
         * @property {number|null} [duration] BotHeldBallDeliberately duration
         */

        /**
         * Constructs a new BotHeldBallDeliberately.
         * @memberof GameEvent
         * @classdesc Represents a BotHeldBallDeliberately.
         * @implements IBotHeldBallDeliberately
         * @constructor
         * @param {GameEvent.IBotHeldBallDeliberately=} [properties] Properties to set
         */
        function BotHeldBallDeliberately(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotHeldBallDeliberately byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotHeldBallDeliberately
         * @instance
         */
        BotHeldBallDeliberately.prototype.byTeam = 0;

        /**
         * BotHeldBallDeliberately byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotHeldBallDeliberately
         * @instance
         */
        BotHeldBallDeliberately.prototype.byBot = 0;

        /**
         * BotHeldBallDeliberately location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotHeldBallDeliberately
         * @instance
         */
        BotHeldBallDeliberately.prototype.location = null;

        /**
         * BotHeldBallDeliberately duration.
         * @member {number} duration
         * @memberof GameEvent.BotHeldBallDeliberately
         * @instance
         */
        BotHeldBallDeliberately.prototype.duration = 0;

        /**
         * Creates a new BotHeldBallDeliberately instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {GameEvent.IBotHeldBallDeliberately=} [properties] Properties to set
         * @returns {GameEvent.BotHeldBallDeliberately} BotHeldBallDeliberately instance
         */
        BotHeldBallDeliberately.create = function create(properties) {
            return new BotHeldBallDeliberately(properties);
        };

        /**
         * Encodes the specified BotHeldBallDeliberately message. Does not implicitly {@link GameEvent.BotHeldBallDeliberately.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {GameEvent.IBotHeldBallDeliberately} message BotHeldBallDeliberately message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotHeldBallDeliberately.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.duration);
            return writer;
        };

        /**
         * Encodes the specified BotHeldBallDeliberately message, length delimited. Does not implicitly {@link GameEvent.BotHeldBallDeliberately.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {GameEvent.IBotHeldBallDeliberately} message BotHeldBallDeliberately message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotHeldBallDeliberately.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotHeldBallDeliberately message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotHeldBallDeliberately} BotHeldBallDeliberately
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotHeldBallDeliberately.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotHeldBallDeliberately();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.duration = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotHeldBallDeliberately message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotHeldBallDeliberately} BotHeldBallDeliberately
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotHeldBallDeliberately.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotHeldBallDeliberately message.
         * @function verify
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotHeldBallDeliberately.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (typeof message.duration !== "number")
                    return "duration: number expected";
            return null;
        };

        /**
         * Creates a BotHeldBallDeliberately message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotHeldBallDeliberately} BotHeldBallDeliberately
         */
        BotHeldBallDeliberately.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotHeldBallDeliberately)
                return object;
            let message = new $root.GameEvent.BotHeldBallDeliberately();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotHeldBallDeliberately.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.duration != null)
                message.duration = Number(object.duration);
            return message;
        };

        /**
         * Creates a plain object from a BotHeldBallDeliberately message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotHeldBallDeliberately
         * @static
         * @param {GameEvent.BotHeldBallDeliberately} message BotHeldBallDeliberately
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotHeldBallDeliberately.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
                object.duration = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = options.json && !isFinite(message.duration) ? String(message.duration) : message.duration;
            return object;
        };

        /**
         * Converts this BotHeldBallDeliberately to JSON.
         * @function toJSON
         * @memberof GameEvent.BotHeldBallDeliberately
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotHeldBallDeliberately.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotHeldBallDeliberately;
    })();

    GameEvent.BotInterferedPlacement = (function() {

        /**
         * Properties of a BotInterferedPlacement.
         * @memberof GameEvent
         * @interface IBotInterferedPlacement
         * @property {Team} byTeam BotInterferedPlacement byTeam
         * @property {number|null} [byBot] BotInterferedPlacement byBot
         * @property {ILocation|null} [location] BotInterferedPlacement location
         */

        /**
         * Constructs a new BotInterferedPlacement.
         * @memberof GameEvent
         * @classdesc Represents a BotInterferedPlacement.
         * @implements IBotInterferedPlacement
         * @constructor
         * @param {GameEvent.IBotInterferedPlacement=} [properties] Properties to set
         */
        function BotInterferedPlacement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotInterferedPlacement byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotInterferedPlacement
         * @instance
         */
        BotInterferedPlacement.prototype.byTeam = 0;

        /**
         * BotInterferedPlacement byBot.
         * @member {number} byBot
         * @memberof GameEvent.BotInterferedPlacement
         * @instance
         */
        BotInterferedPlacement.prototype.byBot = 0;

        /**
         * BotInterferedPlacement location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.BotInterferedPlacement
         * @instance
         */
        BotInterferedPlacement.prototype.location = null;

        /**
         * Creates a new BotInterferedPlacement instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {GameEvent.IBotInterferedPlacement=} [properties] Properties to set
         * @returns {GameEvent.BotInterferedPlacement} BotInterferedPlacement instance
         */
        BotInterferedPlacement.create = function create(properties) {
            return new BotInterferedPlacement(properties);
        };

        /**
         * Encodes the specified BotInterferedPlacement message. Does not implicitly {@link GameEvent.BotInterferedPlacement.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {GameEvent.IBotInterferedPlacement} message BotInterferedPlacement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotInterferedPlacement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byBot);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BotInterferedPlacement message, length delimited. Does not implicitly {@link GameEvent.BotInterferedPlacement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {GameEvent.IBotInterferedPlacement} message BotInterferedPlacement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotInterferedPlacement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotInterferedPlacement message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotInterferedPlacement} BotInterferedPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotInterferedPlacement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotInterferedPlacement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.byBot = reader.uint32();
                    break;
                case 3:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotInterferedPlacement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotInterferedPlacement} BotInterferedPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotInterferedPlacement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotInterferedPlacement message.
         * @function verify
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotInterferedPlacement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                if (!$util.isInteger(message.byBot))
                    return "byBot: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates a BotInterferedPlacement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotInterferedPlacement} BotInterferedPlacement
         */
        BotInterferedPlacement.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotInterferedPlacement)
                return object;
            let message = new $root.GameEvent.BotInterferedPlacement();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.byBot != null)
                message.byBot = object.byBot >>> 0;
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.BotInterferedPlacement.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from a BotInterferedPlacement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotInterferedPlacement
         * @static
         * @param {GameEvent.BotInterferedPlacement} message BotInterferedPlacement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotInterferedPlacement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.byBot = 0;
                object.location = null;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.byBot != null && message.hasOwnProperty("byBot"))
                object.byBot = message.byBot;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            return object;
        };

        /**
         * Converts this BotInterferedPlacement to JSON.
         * @function toJSON
         * @memberof GameEvent.BotInterferedPlacement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotInterferedPlacement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotInterferedPlacement;
    })();

    GameEvent.MultipleCards = (function() {

        /**
         * Properties of a MultipleCards.
         * @memberof GameEvent
         * @interface IMultipleCards
         * @property {Team} byTeam MultipleCards byTeam
         */

        /**
         * Constructs a new MultipleCards.
         * @memberof GameEvent
         * @classdesc Represents a MultipleCards.
         * @implements IMultipleCards
         * @constructor
         * @param {GameEvent.IMultipleCards=} [properties] Properties to set
         */
        function MultipleCards(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultipleCards byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.MultipleCards
         * @instance
         */
        MultipleCards.prototype.byTeam = 0;

        /**
         * Creates a new MultipleCards instance using the specified properties.
         * @function create
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {GameEvent.IMultipleCards=} [properties] Properties to set
         * @returns {GameEvent.MultipleCards} MultipleCards instance
         */
        MultipleCards.create = function create(properties) {
            return new MultipleCards(properties);
        };

        /**
         * Encodes the specified MultipleCards message. Does not implicitly {@link GameEvent.MultipleCards.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {GameEvent.IMultipleCards} message MultipleCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultipleCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            return writer;
        };

        /**
         * Encodes the specified MultipleCards message, length delimited. Does not implicitly {@link GameEvent.MultipleCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {GameEvent.IMultipleCards} message MultipleCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultipleCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultipleCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.MultipleCards} MultipleCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultipleCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.MultipleCards();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a MultipleCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.MultipleCards} MultipleCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultipleCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultipleCards message.
         * @function verify
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultipleCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a MultipleCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.MultipleCards} MultipleCards
         */
        MultipleCards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.MultipleCards)
                return object;
            let message = new $root.GameEvent.MultipleCards();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MultipleCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.MultipleCards
         * @static
         * @param {GameEvent.MultipleCards} message MultipleCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultipleCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            return object;
        };

        /**
         * Converts this MultipleCards to JSON.
         * @function toJSON
         * @memberof GameEvent.MultipleCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultipleCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MultipleCards;
    })();

    GameEvent.MultipleFouls = (function() {

        /**
         * Properties of a MultipleFouls.
         * @memberof GameEvent
         * @interface IMultipleFouls
         * @property {Team} byTeam MultipleFouls byTeam
         */

        /**
         * Constructs a new MultipleFouls.
         * @memberof GameEvent
         * @classdesc Represents a MultipleFouls.
         * @implements IMultipleFouls
         * @constructor
         * @param {GameEvent.IMultipleFouls=} [properties] Properties to set
         */
        function MultipleFouls(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultipleFouls byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.MultipleFouls
         * @instance
         */
        MultipleFouls.prototype.byTeam = 0;

        /**
         * Creates a new MultipleFouls instance using the specified properties.
         * @function create
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {GameEvent.IMultipleFouls=} [properties] Properties to set
         * @returns {GameEvent.MultipleFouls} MultipleFouls instance
         */
        MultipleFouls.create = function create(properties) {
            return new MultipleFouls(properties);
        };

        /**
         * Encodes the specified MultipleFouls message. Does not implicitly {@link GameEvent.MultipleFouls.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {GameEvent.IMultipleFouls} message MultipleFouls message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultipleFouls.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            return writer;
        };

        /**
         * Encodes the specified MultipleFouls message, length delimited. Does not implicitly {@link GameEvent.MultipleFouls.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {GameEvent.IMultipleFouls} message MultipleFouls message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultipleFouls.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultipleFouls message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.MultipleFouls} MultipleFouls
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultipleFouls.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.MultipleFouls();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a MultipleFouls message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.MultipleFouls} MultipleFouls
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultipleFouls.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultipleFouls message.
         * @function verify
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultipleFouls.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a MultipleFouls message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.MultipleFouls} MultipleFouls
         */
        MultipleFouls.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.MultipleFouls)
                return object;
            let message = new $root.GameEvent.MultipleFouls();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MultipleFouls message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.MultipleFouls
         * @static
         * @param {GameEvent.MultipleFouls} message MultipleFouls
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultipleFouls.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            return object;
        };

        /**
         * Converts this MultipleFouls to JSON.
         * @function toJSON
         * @memberof GameEvent.MultipleFouls
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultipleFouls.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MultipleFouls;
    })();

    GameEvent.MultiplePlacementFailures = (function() {

        /**
         * Properties of a MultiplePlacementFailures.
         * @memberof GameEvent
         * @interface IMultiplePlacementFailures
         * @property {Team} byTeam MultiplePlacementFailures byTeam
         */

        /**
         * Constructs a new MultiplePlacementFailures.
         * @memberof GameEvent
         * @classdesc Represents a MultiplePlacementFailures.
         * @implements IMultiplePlacementFailures
         * @constructor
         * @param {GameEvent.IMultiplePlacementFailures=} [properties] Properties to set
         */
        function MultiplePlacementFailures(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiplePlacementFailures byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.MultiplePlacementFailures
         * @instance
         */
        MultiplePlacementFailures.prototype.byTeam = 0;

        /**
         * Creates a new MultiplePlacementFailures instance using the specified properties.
         * @function create
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {GameEvent.IMultiplePlacementFailures=} [properties] Properties to set
         * @returns {GameEvent.MultiplePlacementFailures} MultiplePlacementFailures instance
         */
        MultiplePlacementFailures.create = function create(properties) {
            return new MultiplePlacementFailures(properties);
        };

        /**
         * Encodes the specified MultiplePlacementFailures message. Does not implicitly {@link GameEvent.MultiplePlacementFailures.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {GameEvent.IMultiplePlacementFailures} message MultiplePlacementFailures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplePlacementFailures.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            return writer;
        };

        /**
         * Encodes the specified MultiplePlacementFailures message, length delimited. Does not implicitly {@link GameEvent.MultiplePlacementFailures.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {GameEvent.IMultiplePlacementFailures} message MultiplePlacementFailures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplePlacementFailures.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultiplePlacementFailures message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.MultiplePlacementFailures} MultiplePlacementFailures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplePlacementFailures.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.MultiplePlacementFailures();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a MultiplePlacementFailures message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.MultiplePlacementFailures} MultiplePlacementFailures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplePlacementFailures.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultiplePlacementFailures message.
         * @function verify
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultiplePlacementFailures.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a MultiplePlacementFailures message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.MultiplePlacementFailures} MultiplePlacementFailures
         */
        MultiplePlacementFailures.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.MultiplePlacementFailures)
                return object;
            let message = new $root.GameEvent.MultiplePlacementFailures();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MultiplePlacementFailures message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.MultiplePlacementFailures
         * @static
         * @param {GameEvent.MultiplePlacementFailures} message MultiplePlacementFailures
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultiplePlacementFailures.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            return object;
        };

        /**
         * Converts this MultiplePlacementFailures to JSON.
         * @function toJSON
         * @memberof GameEvent.MultiplePlacementFailures
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultiplePlacementFailures.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MultiplePlacementFailures;
    })();

    GameEvent.KickTimeout = (function() {

        /**
         * Properties of a KickTimeout.
         * @memberof GameEvent
         * @interface IKickTimeout
         * @property {Team} byTeam KickTimeout byTeam
         * @property {ILocation|null} [location] KickTimeout location
         * @property {number|null} [time] KickTimeout time
         */

        /**
         * Constructs a new KickTimeout.
         * @memberof GameEvent
         * @classdesc Represents a KickTimeout.
         * @implements IKickTimeout
         * @constructor
         * @param {GameEvent.IKickTimeout=} [properties] Properties to set
         */
        function KickTimeout(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickTimeout byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.KickTimeout
         * @instance
         */
        KickTimeout.prototype.byTeam = 0;

        /**
         * KickTimeout location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.KickTimeout
         * @instance
         */
        KickTimeout.prototype.location = null;

        /**
         * KickTimeout time.
         * @member {number} time
         * @memberof GameEvent.KickTimeout
         * @instance
         */
        KickTimeout.prototype.time = 0;

        /**
         * Creates a new KickTimeout instance using the specified properties.
         * @function create
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {GameEvent.IKickTimeout=} [properties] Properties to set
         * @returns {GameEvent.KickTimeout} KickTimeout instance
         */
        KickTimeout.create = function create(properties) {
            return new KickTimeout(properties);
        };

        /**
         * Encodes the specified KickTimeout message. Does not implicitly {@link GameEvent.KickTimeout.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {GameEvent.IKickTimeout} message KickTimeout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickTimeout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.time);
            return writer;
        };

        /**
         * Encodes the specified KickTimeout message, length delimited. Does not implicitly {@link GameEvent.KickTimeout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {GameEvent.IKickTimeout} message KickTimeout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickTimeout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickTimeout message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.KickTimeout} KickTimeout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickTimeout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.KickTimeout();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.time = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a KickTimeout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.KickTimeout} KickTimeout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickTimeout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickTimeout message.
         * @function verify
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickTimeout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time !== "number")
                    return "time: number expected";
            return null;
        };

        /**
         * Creates a KickTimeout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.KickTimeout} KickTimeout
         */
        KickTimeout.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.KickTimeout)
                return object;
            let message = new $root.GameEvent.KickTimeout();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.KickTimeout.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.time != null)
                message.time = Number(object.time);
            return message;
        };

        /**
         * Creates a plain object from a KickTimeout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.KickTimeout
         * @static
         * @param {GameEvent.KickTimeout} message KickTimeout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickTimeout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.location = null;
                object.time = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
            return object;
        };

        /**
         * Converts this KickTimeout to JSON.
         * @function toJSON
         * @memberof GameEvent.KickTimeout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickTimeout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickTimeout;
    })();

    GameEvent.NoProgressInGame = (function() {

        /**
         * Properties of a NoProgressInGame.
         * @memberof GameEvent
         * @interface INoProgressInGame
         * @property {ILocation|null} [location] NoProgressInGame location
         * @property {number|null} [time] NoProgressInGame time
         */

        /**
         * Constructs a new NoProgressInGame.
         * @memberof GameEvent
         * @classdesc Represents a NoProgressInGame.
         * @implements INoProgressInGame
         * @constructor
         * @param {GameEvent.INoProgressInGame=} [properties] Properties to set
         */
        function NoProgressInGame(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoProgressInGame location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.NoProgressInGame
         * @instance
         */
        NoProgressInGame.prototype.location = null;

        /**
         * NoProgressInGame time.
         * @member {number} time
         * @memberof GameEvent.NoProgressInGame
         * @instance
         */
        NoProgressInGame.prototype.time = 0;

        /**
         * Creates a new NoProgressInGame instance using the specified properties.
         * @function create
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {GameEvent.INoProgressInGame=} [properties] Properties to set
         * @returns {GameEvent.NoProgressInGame} NoProgressInGame instance
         */
        NoProgressInGame.create = function create(properties) {
            return new NoProgressInGame(properties);
        };

        /**
         * Encodes the specified NoProgressInGame message. Does not implicitly {@link GameEvent.NoProgressInGame.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {GameEvent.INoProgressInGame} message NoProgressInGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoProgressInGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.time);
            return writer;
        };

        /**
         * Encodes the specified NoProgressInGame message, length delimited. Does not implicitly {@link GameEvent.NoProgressInGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {GameEvent.INoProgressInGame} message NoProgressInGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoProgressInGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoProgressInGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.NoProgressInGame} NoProgressInGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoProgressInGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.NoProgressInGame();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.time = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoProgressInGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.NoProgressInGame} NoProgressInGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoProgressInGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoProgressInGame message.
         * @function verify
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoProgressInGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time !== "number")
                    return "time: number expected";
            return null;
        };

        /**
         * Creates a NoProgressInGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.NoProgressInGame} NoProgressInGame
         */
        NoProgressInGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.NoProgressInGame)
                return object;
            let message = new $root.GameEvent.NoProgressInGame();
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.NoProgressInGame.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.time != null)
                message.time = Number(object.time);
            return message;
        };

        /**
         * Creates a plain object from a NoProgressInGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.NoProgressInGame
         * @static
         * @param {GameEvent.NoProgressInGame} message NoProgressInGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoProgressInGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.location = null;
                object.time = 0;
            }
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
            return object;
        };

        /**
         * Converts this NoProgressInGame to JSON.
         * @function toJSON
         * @memberof GameEvent.NoProgressInGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoProgressInGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoProgressInGame;
    })();

    GameEvent.PlacementFailed = (function() {

        /**
         * Properties of a PlacementFailed.
         * @memberof GameEvent
         * @interface IPlacementFailed
         * @property {Team} byTeam PlacementFailed byTeam
         * @property {number|null} [remainingDistance] PlacementFailed remainingDistance
         */

        /**
         * Constructs a new PlacementFailed.
         * @memberof GameEvent
         * @classdesc Represents a PlacementFailed.
         * @implements IPlacementFailed
         * @constructor
         * @param {GameEvent.IPlacementFailed=} [properties] Properties to set
         */
        function PlacementFailed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlacementFailed byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.PlacementFailed
         * @instance
         */
        PlacementFailed.prototype.byTeam = 0;

        /**
         * PlacementFailed remainingDistance.
         * @member {number} remainingDistance
         * @memberof GameEvent.PlacementFailed
         * @instance
         */
        PlacementFailed.prototype.remainingDistance = 0;

        /**
         * Creates a new PlacementFailed instance using the specified properties.
         * @function create
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {GameEvent.IPlacementFailed=} [properties] Properties to set
         * @returns {GameEvent.PlacementFailed} PlacementFailed instance
         */
        PlacementFailed.create = function create(properties) {
            return new PlacementFailed(properties);
        };

        /**
         * Encodes the specified PlacementFailed message. Does not implicitly {@link GameEvent.PlacementFailed.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {GameEvent.IPlacementFailed} message PlacementFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlacementFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.remainingDistance != null && message.hasOwnProperty("remainingDistance"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.remainingDistance);
            return writer;
        };

        /**
         * Encodes the specified PlacementFailed message, length delimited. Does not implicitly {@link GameEvent.PlacementFailed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {GameEvent.IPlacementFailed} message PlacementFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlacementFailed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlacementFailed message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.PlacementFailed} PlacementFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlacementFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.PlacementFailed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.remainingDistance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlacementFailed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.PlacementFailed} PlacementFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlacementFailed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlacementFailed message.
         * @function verify
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlacementFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.remainingDistance != null && message.hasOwnProperty("remainingDistance"))
                if (typeof message.remainingDistance !== "number")
                    return "remainingDistance: number expected";
            return null;
        };

        /**
         * Creates a PlacementFailed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.PlacementFailed} PlacementFailed
         */
        PlacementFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.PlacementFailed)
                return object;
            let message = new $root.GameEvent.PlacementFailed();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.remainingDistance != null)
                message.remainingDistance = Number(object.remainingDistance);
            return message;
        };

        /**
         * Creates a plain object from a PlacementFailed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.PlacementFailed
         * @static
         * @param {GameEvent.PlacementFailed} message PlacementFailed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlacementFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.remainingDistance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.remainingDistance != null && message.hasOwnProperty("remainingDistance"))
                object.remainingDistance = options.json && !isFinite(message.remainingDistance) ? String(message.remainingDistance) : message.remainingDistance;
            return object;
        };

        /**
         * Converts this PlacementFailed to JSON.
         * @function toJSON
         * @memberof GameEvent.PlacementFailed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlacementFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlacementFailed;
    })();

    GameEvent.UnsportingBehaviorMinor = (function() {

        /**
         * Properties of an UnsportingBehaviorMinor.
         * @memberof GameEvent
         * @interface IUnsportingBehaviorMinor
         * @property {Team} byTeam UnsportingBehaviorMinor byTeam
         * @property {string} reason UnsportingBehaviorMinor reason
         */

        /**
         * Constructs a new UnsportingBehaviorMinor.
         * @memberof GameEvent
         * @classdesc Represents an UnsportingBehaviorMinor.
         * @implements IUnsportingBehaviorMinor
         * @constructor
         * @param {GameEvent.IUnsportingBehaviorMinor=} [properties] Properties to set
         */
        function UnsportingBehaviorMinor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnsportingBehaviorMinor byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @instance
         */
        UnsportingBehaviorMinor.prototype.byTeam = 0;

        /**
         * UnsportingBehaviorMinor reason.
         * @member {string} reason
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @instance
         */
        UnsportingBehaviorMinor.prototype.reason = "";

        /**
         * Creates a new UnsportingBehaviorMinor instance using the specified properties.
         * @function create
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMinor=} [properties] Properties to set
         * @returns {GameEvent.UnsportingBehaviorMinor} UnsportingBehaviorMinor instance
         */
        UnsportingBehaviorMinor.create = function create(properties) {
            return new UnsportingBehaviorMinor(properties);
        };

        /**
         * Encodes the specified UnsportingBehaviorMinor message. Does not implicitly {@link GameEvent.UnsportingBehaviorMinor.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMinor} message UnsportingBehaviorMinor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnsportingBehaviorMinor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified UnsportingBehaviorMinor message, length delimited. Does not implicitly {@link GameEvent.UnsportingBehaviorMinor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMinor} message UnsportingBehaviorMinor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnsportingBehaviorMinor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnsportingBehaviorMinor message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.UnsportingBehaviorMinor} UnsportingBehaviorMinor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnsportingBehaviorMinor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.UnsportingBehaviorMinor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            if (!message.hasOwnProperty("reason"))
                throw $util.ProtocolError("missing required 'reason'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnsportingBehaviorMinor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.UnsportingBehaviorMinor} UnsportingBehaviorMinor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnsportingBehaviorMinor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnsportingBehaviorMinor message.
         * @function verify
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnsportingBehaviorMinor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.reason))
                return "reason: string expected";
            return null;
        };

        /**
         * Creates an UnsportingBehaviorMinor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.UnsportingBehaviorMinor} UnsportingBehaviorMinor
         */
        UnsportingBehaviorMinor.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.UnsportingBehaviorMinor)
                return object;
            let message = new $root.GameEvent.UnsportingBehaviorMinor();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from an UnsportingBehaviorMinor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @static
         * @param {GameEvent.UnsportingBehaviorMinor} message UnsportingBehaviorMinor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnsportingBehaviorMinor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.reason = "";
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this UnsportingBehaviorMinor to JSON.
         * @function toJSON
         * @memberof GameEvent.UnsportingBehaviorMinor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnsportingBehaviorMinor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnsportingBehaviorMinor;
    })();

    GameEvent.UnsportingBehaviorMajor = (function() {

        /**
         * Properties of an UnsportingBehaviorMajor.
         * @memberof GameEvent
         * @interface IUnsportingBehaviorMajor
         * @property {Team} byTeam UnsportingBehaviorMajor byTeam
         * @property {string} reason UnsportingBehaviorMajor reason
         */

        /**
         * Constructs a new UnsportingBehaviorMajor.
         * @memberof GameEvent
         * @classdesc Represents an UnsportingBehaviorMajor.
         * @implements IUnsportingBehaviorMajor
         * @constructor
         * @param {GameEvent.IUnsportingBehaviorMajor=} [properties] Properties to set
         */
        function UnsportingBehaviorMajor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnsportingBehaviorMajor byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @instance
         */
        UnsportingBehaviorMajor.prototype.byTeam = 0;

        /**
         * UnsportingBehaviorMajor reason.
         * @member {string} reason
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @instance
         */
        UnsportingBehaviorMajor.prototype.reason = "";

        /**
         * Creates a new UnsportingBehaviorMajor instance using the specified properties.
         * @function create
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMajor=} [properties] Properties to set
         * @returns {GameEvent.UnsportingBehaviorMajor} UnsportingBehaviorMajor instance
         */
        UnsportingBehaviorMajor.create = function create(properties) {
            return new UnsportingBehaviorMajor(properties);
        };

        /**
         * Encodes the specified UnsportingBehaviorMajor message. Does not implicitly {@link GameEvent.UnsportingBehaviorMajor.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMajor} message UnsportingBehaviorMajor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnsportingBehaviorMajor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified UnsportingBehaviorMajor message, length delimited. Does not implicitly {@link GameEvent.UnsportingBehaviorMajor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {GameEvent.IUnsportingBehaviorMajor} message UnsportingBehaviorMajor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnsportingBehaviorMajor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnsportingBehaviorMajor message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.UnsportingBehaviorMajor} UnsportingBehaviorMajor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnsportingBehaviorMajor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.UnsportingBehaviorMajor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            if (!message.hasOwnProperty("reason"))
                throw $util.ProtocolError("missing required 'reason'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnsportingBehaviorMajor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.UnsportingBehaviorMajor} UnsportingBehaviorMajor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnsportingBehaviorMajor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnsportingBehaviorMajor message.
         * @function verify
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnsportingBehaviorMajor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.reason))
                return "reason: string expected";
            return null;
        };

        /**
         * Creates an UnsportingBehaviorMajor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.UnsportingBehaviorMajor} UnsportingBehaviorMajor
         */
        UnsportingBehaviorMajor.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.UnsportingBehaviorMajor)
                return object;
            let message = new $root.GameEvent.UnsportingBehaviorMajor();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from an UnsportingBehaviorMajor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @static
         * @param {GameEvent.UnsportingBehaviorMajor} message UnsportingBehaviorMajor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnsportingBehaviorMajor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.reason = "";
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this UnsportingBehaviorMajor to JSON.
         * @function toJSON
         * @memberof GameEvent.UnsportingBehaviorMajor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnsportingBehaviorMajor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnsportingBehaviorMajor;
    })();

    GameEvent.KeeperHeldBall = (function() {

        /**
         * Properties of a KeeperHeldBall.
         * @memberof GameEvent
         * @interface IKeeperHeldBall
         * @property {Team} byTeam KeeperHeldBall byTeam
         * @property {ILocation|null} [location] KeeperHeldBall location
         * @property {number|null} [duration] KeeperHeldBall duration
         */

        /**
         * Constructs a new KeeperHeldBall.
         * @memberof GameEvent
         * @classdesc Represents a KeeperHeldBall.
         * @implements IKeeperHeldBall
         * @constructor
         * @param {GameEvent.IKeeperHeldBall=} [properties] Properties to set
         */
        function KeeperHeldBall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeeperHeldBall byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.KeeperHeldBall
         * @instance
         */
        KeeperHeldBall.prototype.byTeam = 0;

        /**
         * KeeperHeldBall location.
         * @member {ILocation|null|undefined} location
         * @memberof GameEvent.KeeperHeldBall
         * @instance
         */
        KeeperHeldBall.prototype.location = null;

        /**
         * KeeperHeldBall duration.
         * @member {number} duration
         * @memberof GameEvent.KeeperHeldBall
         * @instance
         */
        KeeperHeldBall.prototype.duration = 0;

        /**
         * Creates a new KeeperHeldBall instance using the specified properties.
         * @function create
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {GameEvent.IKeeperHeldBall=} [properties] Properties to set
         * @returns {GameEvent.KeeperHeldBall} KeeperHeldBall instance
         */
        KeeperHeldBall.create = function create(properties) {
            return new KeeperHeldBall(properties);
        };

        /**
         * Encodes the specified KeeperHeldBall message. Does not implicitly {@link GameEvent.KeeperHeldBall.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {GameEvent.IKeeperHeldBall} message KeeperHeldBall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeeperHeldBall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.Location.encode(message.location, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.duration);
            return writer;
        };

        /**
         * Encodes the specified KeeperHeldBall message, length delimited. Does not implicitly {@link GameEvent.KeeperHeldBall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {GameEvent.IKeeperHeldBall} message KeeperHeldBall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeeperHeldBall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeeperHeldBall message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.KeeperHeldBall} KeeperHeldBall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeeperHeldBall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.KeeperHeldBall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.location = $root.Location.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a KeeperHeldBall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.KeeperHeldBall} KeeperHeldBall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeeperHeldBall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeeperHeldBall message.
         * @function verify
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeeperHeldBall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (typeof message.duration !== "number")
                    return "duration: number expected";
            return null;
        };

        /**
         * Creates a KeeperHeldBall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.KeeperHeldBall} KeeperHeldBall
         */
        KeeperHeldBall.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.KeeperHeldBall)
                return object;
            let message = new $root.GameEvent.KeeperHeldBall();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".GameEvent.KeeperHeldBall.location: object expected");
                message.location = $root.Location.fromObject(object.location);
            }
            if (object.duration != null)
                message.duration = Number(object.duration);
            return message;
        };

        /**
         * Creates a plain object from a KeeperHeldBall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.KeeperHeldBall
         * @static
         * @param {GameEvent.KeeperHeldBall} message KeeperHeldBall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeeperHeldBall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.location = null;
                object.duration = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Location.toObject(message.location, options);
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = options.json && !isFinite(message.duration) ? String(message.duration) : message.duration;
            return object;
        };

        /**
         * Converts this KeeperHeldBall to JSON.
         * @function toJSON
         * @memberof GameEvent.KeeperHeldBall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeeperHeldBall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeeperHeldBall;
    })();

    GameEvent.PlacementSucceeded = (function() {

        /**
         * Properties of a PlacementSucceeded.
         * @memberof GameEvent
         * @interface IPlacementSucceeded
         * @property {Team} byTeam PlacementSucceeded byTeam
         * @property {number|null} [timeTaken] PlacementSucceeded timeTaken
         * @property {number|null} [precision] PlacementSucceeded precision
         * @property {number|null} [distance] PlacementSucceeded distance
         */

        /**
         * Constructs a new PlacementSucceeded.
         * @memberof GameEvent
         * @classdesc Represents a PlacementSucceeded.
         * @implements IPlacementSucceeded
         * @constructor
         * @param {GameEvent.IPlacementSucceeded=} [properties] Properties to set
         */
        function PlacementSucceeded(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlacementSucceeded byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.PlacementSucceeded
         * @instance
         */
        PlacementSucceeded.prototype.byTeam = 0;

        /**
         * PlacementSucceeded timeTaken.
         * @member {number} timeTaken
         * @memberof GameEvent.PlacementSucceeded
         * @instance
         */
        PlacementSucceeded.prototype.timeTaken = 0;

        /**
         * PlacementSucceeded precision.
         * @member {number} precision
         * @memberof GameEvent.PlacementSucceeded
         * @instance
         */
        PlacementSucceeded.prototype.precision = 0;

        /**
         * PlacementSucceeded distance.
         * @member {number} distance
         * @memberof GameEvent.PlacementSucceeded
         * @instance
         */
        PlacementSucceeded.prototype.distance = 0;

        /**
         * Creates a new PlacementSucceeded instance using the specified properties.
         * @function create
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {GameEvent.IPlacementSucceeded=} [properties] Properties to set
         * @returns {GameEvent.PlacementSucceeded} PlacementSucceeded instance
         */
        PlacementSucceeded.create = function create(properties) {
            return new PlacementSucceeded(properties);
        };

        /**
         * Encodes the specified PlacementSucceeded message. Does not implicitly {@link GameEvent.PlacementSucceeded.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {GameEvent.IPlacementSucceeded} message PlacementSucceeded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlacementSucceeded.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.timeTaken);
            if (message.precision != null && message.hasOwnProperty("precision"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.precision);
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified PlacementSucceeded message, length delimited. Does not implicitly {@link GameEvent.PlacementSucceeded.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {GameEvent.IPlacementSucceeded} message PlacementSucceeded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlacementSucceeded.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlacementSucceeded message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.PlacementSucceeded} PlacementSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlacementSucceeded.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.PlacementSucceeded();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                case 2:
                    message.timeTaken = reader.float();
                    break;
                case 3:
                    message.precision = reader.float();
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlacementSucceeded message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.PlacementSucceeded} PlacementSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlacementSucceeded.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlacementSucceeded message.
         * @function verify
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlacementSucceeded.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                if (typeof message.timeTaken !== "number")
                    return "timeTaken: number expected";
            if (message.precision != null && message.hasOwnProperty("precision"))
                if (typeof message.precision !== "number")
                    return "precision: number expected";
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates a PlacementSucceeded message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.PlacementSucceeded} PlacementSucceeded
         */
        PlacementSucceeded.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.PlacementSucceeded)
                return object;
            let message = new $root.GameEvent.PlacementSucceeded();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            if (object.timeTaken != null)
                message.timeTaken = Number(object.timeTaken);
            if (object.precision != null)
                message.precision = Number(object.precision);
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from a PlacementSucceeded message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.PlacementSucceeded
         * @static
         * @param {GameEvent.PlacementSucceeded} message PlacementSucceeded
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlacementSucceeded.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
                object.timeTaken = 0;
                object.precision = 0;
                object.distance = 0;
            }
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                object.timeTaken = options.json && !isFinite(message.timeTaken) ? String(message.timeTaken) : message.timeTaken;
            if (message.precision != null && message.hasOwnProperty("precision"))
                object.precision = options.json && !isFinite(message.precision) ? String(message.precision) : message.precision;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this PlacementSucceeded to JSON.
         * @function toJSON
         * @memberof GameEvent.PlacementSucceeded
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlacementSucceeded.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlacementSucceeded;
    })();

    GameEvent.Prepared = (function() {

        /**
         * Properties of a Prepared.
         * @memberof GameEvent
         * @interface IPrepared
         * @property {number|null} [timeTaken] Prepared timeTaken
         */

        /**
         * Constructs a new Prepared.
         * @memberof GameEvent
         * @classdesc Represents a Prepared.
         * @implements IPrepared
         * @constructor
         * @param {GameEvent.IPrepared=} [properties] Properties to set
         */
        function Prepared(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Prepared timeTaken.
         * @member {number} timeTaken
         * @memberof GameEvent.Prepared
         * @instance
         */
        Prepared.prototype.timeTaken = 0;

        /**
         * Creates a new Prepared instance using the specified properties.
         * @function create
         * @memberof GameEvent.Prepared
         * @static
         * @param {GameEvent.IPrepared=} [properties] Properties to set
         * @returns {GameEvent.Prepared} Prepared instance
         */
        Prepared.create = function create(properties) {
            return new Prepared(properties);
        };

        /**
         * Encodes the specified Prepared message. Does not implicitly {@link GameEvent.Prepared.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.Prepared
         * @static
         * @param {GameEvent.IPrepared} message Prepared message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prepared.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.timeTaken);
            return writer;
        };

        /**
         * Encodes the specified Prepared message, length delimited. Does not implicitly {@link GameEvent.Prepared.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.Prepared
         * @static
         * @param {GameEvent.IPrepared} message Prepared message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prepared.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Prepared message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.Prepared
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.Prepared} Prepared
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prepared.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.Prepared();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timeTaken = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Prepared message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.Prepared
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.Prepared} Prepared
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prepared.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Prepared message.
         * @function verify
         * @memberof GameEvent.Prepared
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Prepared.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                if (typeof message.timeTaken !== "number")
                    return "timeTaken: number expected";
            return null;
        };

        /**
         * Creates a Prepared message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.Prepared
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.Prepared} Prepared
         */
        Prepared.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.Prepared)
                return object;
            let message = new $root.GameEvent.Prepared();
            if (object.timeTaken != null)
                message.timeTaken = Number(object.timeTaken);
            return message;
        };

        /**
         * Creates a plain object from a Prepared message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.Prepared
         * @static
         * @param {GameEvent.Prepared} message Prepared
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Prepared.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.timeTaken = 0;
            if (message.timeTaken != null && message.hasOwnProperty("timeTaken"))
                object.timeTaken = options.json && !isFinite(message.timeTaken) ? String(message.timeTaken) : message.timeTaken;
            return object;
        };

        /**
         * Converts this Prepared to JSON.
         * @function toJSON
         * @memberof GameEvent.Prepared
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Prepared.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Prepared;
    })();

    GameEvent.BotSubstitution = (function() {

        /**
         * Properties of a BotSubstitution.
         * @memberof GameEvent
         * @interface IBotSubstitution
         * @property {Team} byTeam BotSubstitution byTeam
         */

        /**
         * Constructs a new BotSubstitution.
         * @memberof GameEvent
         * @classdesc Represents a BotSubstitution.
         * @implements IBotSubstitution
         * @constructor
         * @param {GameEvent.IBotSubstitution=} [properties] Properties to set
         */
        function BotSubstitution(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotSubstitution byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.BotSubstitution
         * @instance
         */
        BotSubstitution.prototype.byTeam = 0;

        /**
         * Creates a new BotSubstitution instance using the specified properties.
         * @function create
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {GameEvent.IBotSubstitution=} [properties] Properties to set
         * @returns {GameEvent.BotSubstitution} BotSubstitution instance
         */
        BotSubstitution.create = function create(properties) {
            return new BotSubstitution(properties);
        };

        /**
         * Encodes the specified BotSubstitution message. Does not implicitly {@link GameEvent.BotSubstitution.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {GameEvent.IBotSubstitution} message BotSubstitution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSubstitution.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            return writer;
        };

        /**
         * Encodes the specified BotSubstitution message, length delimited. Does not implicitly {@link GameEvent.BotSubstitution.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {GameEvent.IBotSubstitution} message BotSubstitution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSubstitution.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotSubstitution message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.BotSubstitution} BotSubstitution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSubstitution.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.BotSubstitution();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a BotSubstitution message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.BotSubstitution} BotSubstitution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSubstitution.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotSubstitution message.
         * @function verify
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSubstitution.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a BotSubstitution message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.BotSubstitution} BotSubstitution
         */
        BotSubstitution.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.BotSubstitution)
                return object;
            let message = new $root.GameEvent.BotSubstitution();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotSubstitution message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.BotSubstitution
         * @static
         * @param {GameEvent.BotSubstitution} message BotSubstitution
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSubstitution.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            return object;
        };

        /**
         * Converts this BotSubstitution to JSON.
         * @function toJSON
         * @memberof GameEvent.BotSubstitution
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSubstitution.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotSubstitution;
    })();

    GameEvent.TooManyRobots = (function() {

        /**
         * Properties of a TooManyRobots.
         * @memberof GameEvent
         * @interface ITooManyRobots
         * @property {Team} byTeam TooManyRobots byTeam
         */

        /**
         * Constructs a new TooManyRobots.
         * @memberof GameEvent
         * @classdesc Represents a TooManyRobots.
         * @implements ITooManyRobots
         * @constructor
         * @param {GameEvent.ITooManyRobots=} [properties] Properties to set
         */
        function TooManyRobots(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TooManyRobots byTeam.
         * @member {Team} byTeam
         * @memberof GameEvent.TooManyRobots
         * @instance
         */
        TooManyRobots.prototype.byTeam = 0;

        /**
         * Creates a new TooManyRobots instance using the specified properties.
         * @function create
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {GameEvent.ITooManyRobots=} [properties] Properties to set
         * @returns {GameEvent.TooManyRobots} TooManyRobots instance
         */
        TooManyRobots.create = function create(properties) {
            return new TooManyRobots(properties);
        };

        /**
         * Encodes the specified TooManyRobots message. Does not implicitly {@link GameEvent.TooManyRobots.verify|verify} messages.
         * @function encode
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {GameEvent.ITooManyRobots} message TooManyRobots message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TooManyRobots.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byTeam);
            return writer;
        };

        /**
         * Encodes the specified TooManyRobots message, length delimited. Does not implicitly {@link GameEvent.TooManyRobots.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {GameEvent.ITooManyRobots} message TooManyRobots message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TooManyRobots.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TooManyRobots message from the specified reader or buffer.
         * @function decode
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameEvent.TooManyRobots} TooManyRobots
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TooManyRobots.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameEvent.TooManyRobots();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byTeam = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("byTeam"))
                throw $util.ProtocolError("missing required 'byTeam'", { instance: message });
            return message;
        };

        /**
         * Decodes a TooManyRobots message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameEvent.TooManyRobots} TooManyRobots
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TooManyRobots.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TooManyRobots message.
         * @function verify
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TooManyRobots.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.byTeam) {
            default:
                return "byTeam: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a TooManyRobots message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameEvent.TooManyRobots} TooManyRobots
         */
        TooManyRobots.fromObject = function fromObject(object) {
            if (object instanceof $root.GameEvent.TooManyRobots)
                return object;
            let message = new $root.GameEvent.TooManyRobots();
            switch (object.byTeam) {
            case "UNKNOWN":
            case 0:
                message.byTeam = 0;
                break;
            case "YELLOW":
            case 1:
                message.byTeam = 1;
                break;
            case "BLUE":
            case 2:
                message.byTeam = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TooManyRobots message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameEvent.TooManyRobots
         * @static
         * @param {GameEvent.TooManyRobots} message TooManyRobots
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TooManyRobots.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.byTeam = options.enums === String ? "UNKNOWN" : 0;
            if (message.byTeam != null && message.hasOwnProperty("byTeam"))
                object.byTeam = options.enums === String ? $root.Team[message.byTeam] : message.byTeam;
            return object;
        };

        /**
         * Converts this TooManyRobots to JSON.
         * @function toJSON
         * @memberof GameEvent.TooManyRobots
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TooManyRobots.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TooManyRobots;
    })();

    return GameEvent;
})();

/**
 * GameEventType enum.
 * @exports GameEventType
 * @enum {string}
 * @property {number} UNKNOWN_GAME_EVENT_TYPE=0 UNKNOWN_GAME_EVENT_TYPE value
 * @property {number} PREPARED=1 PREPARED value
 * @property {number} NO_PROGRESS_IN_GAME=2 NO_PROGRESS_IN_GAME value
 * @property {number} PLACEMENT_FAILED=3 PLACEMENT_FAILED value
 * @property {number} PLACEMENT_SUCCEEDED=5 PLACEMENT_SUCCEEDED value
 * @property {number} BOT_SUBSTITUTION=37 BOT_SUBSTITUTION value
 * @property {number} TOO_MANY_ROBOTS=38 TOO_MANY_ROBOTS value
 * @property {number} BALL_LEFT_FIELD_TOUCH_LINE=6 BALL_LEFT_FIELD_TOUCH_LINE value
 * @property {number} BALL_LEFT_FIELD_GOAL_LINE=7 BALL_LEFT_FIELD_GOAL_LINE value
 * @property {number} POSSIBLE_GOAL=39 POSSIBLE_GOAL value
 * @property {number} GOAL=8 GOAL value
 * @property {number} INDIRECT_GOAL=9 INDIRECT_GOAL value
 * @property {number} CHIPPED_GOAL=10 CHIPPED_GOAL value
 * @property {number} AIMLESS_KICK=11 AIMLESS_KICK value
 * @property {number} KICK_TIMEOUT=12 KICK_TIMEOUT value
 * @property {number} KEEPER_HELD_BALL=13 KEEPER_HELD_BALL value
 * @property {number} ATTACKER_DOUBLE_TOUCHED_BALL=14 ATTACKER_DOUBLE_TOUCHED_BALL value
 * @property {number} ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA=15 ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA value
 * @property {number} ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA=16 ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA value
 * @property {number} ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED=40 ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED value
 * @property {number} BOT_DRIBBLED_BALL_TOO_FAR=17 BOT_DRIBBLED_BALL_TOO_FAR value
 * @property {number} BOT_KICKED_BALL_TOO_FAST=18 BOT_KICKED_BALL_TOO_FAST value
 * @property {number} ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA=19 ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA value
 * @property {number} BOT_INTERFERED_PLACEMENT=20 BOT_INTERFERED_PLACEMENT value
 * @property {number} BOT_CRASH_DRAWN=21 BOT_CRASH_DRAWN value
 * @property {number} BOT_CRASH_UNIQUE=22 BOT_CRASH_UNIQUE value
 * @property {number} BOT_CRASH_UNIQUE_SKIPPED=23 BOT_CRASH_UNIQUE_SKIPPED value
 * @property {number} BOT_PUSHED_BOT=24 BOT_PUSHED_BOT value
 * @property {number} BOT_PUSHED_BOT_SKIPPED=25 BOT_PUSHED_BOT_SKIPPED value
 * @property {number} BOT_HELD_BALL_DELIBERATELY=26 BOT_HELD_BALL_DELIBERATELY value
 * @property {number} BOT_TIPPED_OVER=27 BOT_TIPPED_OVER value
 * @property {number} BOT_TOO_FAST_IN_STOP=28 BOT_TOO_FAST_IN_STOP value
 * @property {number} DEFENDER_TOO_CLOSE_TO_KICK_POINT=29 DEFENDER_TOO_CLOSE_TO_KICK_POINT value
 * @property {number} DEFENDER_IN_DEFENSE_AREA_PARTIALLY=30 DEFENDER_IN_DEFENSE_AREA_PARTIALLY value
 * @property {number} DEFENDER_IN_DEFENSE_AREA=31 DEFENDER_IN_DEFENSE_AREA value
 * @property {number} MULTIPLE_CARDS=32 MULTIPLE_CARDS value
 * @property {number} MULTIPLE_PLACEMENT_FAILURES=33 MULTIPLE_PLACEMENT_FAILURES value
 * @property {number} MULTIPLE_FOULS=34 MULTIPLE_FOULS value
 * @property {number} UNSPORTING_BEHAVIOR_MINOR=35 UNSPORTING_BEHAVIOR_MINOR value
 * @property {number} UNSPORTING_BEHAVIOR_MAJOR=36 UNSPORTING_BEHAVIOR_MAJOR value
 */
$root.GameEventType = (function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_GAME_EVENT_TYPE"] = 0;
    values[valuesById[1] = "PREPARED"] = 1;
    values[valuesById[2] = "NO_PROGRESS_IN_GAME"] = 2;
    values[valuesById[3] = "PLACEMENT_FAILED"] = 3;
    values[valuesById[5] = "PLACEMENT_SUCCEEDED"] = 5;
    values[valuesById[37] = "BOT_SUBSTITUTION"] = 37;
    values[valuesById[38] = "TOO_MANY_ROBOTS"] = 38;
    values[valuesById[6] = "BALL_LEFT_FIELD_TOUCH_LINE"] = 6;
    values[valuesById[7] = "BALL_LEFT_FIELD_GOAL_LINE"] = 7;
    values[valuesById[39] = "POSSIBLE_GOAL"] = 39;
    values[valuesById[8] = "GOAL"] = 8;
    values[valuesById[9] = "INDIRECT_GOAL"] = 9;
    values[valuesById[10] = "CHIPPED_GOAL"] = 10;
    values[valuesById[11] = "AIMLESS_KICK"] = 11;
    values[valuesById[12] = "KICK_TIMEOUT"] = 12;
    values[valuesById[13] = "KEEPER_HELD_BALL"] = 13;
    values[valuesById[14] = "ATTACKER_DOUBLE_TOUCHED_BALL"] = 14;
    values[valuesById[15] = "ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA"] = 15;
    values[valuesById[16] = "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA"] = 16;
    values[valuesById[40] = "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED"] = 40;
    values[valuesById[17] = "BOT_DRIBBLED_BALL_TOO_FAR"] = 17;
    values[valuesById[18] = "BOT_KICKED_BALL_TOO_FAST"] = 18;
    values[valuesById[19] = "ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA"] = 19;
    values[valuesById[20] = "BOT_INTERFERED_PLACEMENT"] = 20;
    values[valuesById[21] = "BOT_CRASH_DRAWN"] = 21;
    values[valuesById[22] = "BOT_CRASH_UNIQUE"] = 22;
    values[valuesById[23] = "BOT_CRASH_UNIQUE_SKIPPED"] = 23;
    values[valuesById[24] = "BOT_PUSHED_BOT"] = 24;
    values[valuesById[25] = "BOT_PUSHED_BOT_SKIPPED"] = 25;
    values[valuesById[26] = "BOT_HELD_BALL_DELIBERATELY"] = 26;
    values[valuesById[27] = "BOT_TIPPED_OVER"] = 27;
    values[valuesById[28] = "BOT_TOO_FAST_IN_STOP"] = 28;
    values[valuesById[29] = "DEFENDER_TOO_CLOSE_TO_KICK_POINT"] = 29;
    values[valuesById[30] = "DEFENDER_IN_DEFENSE_AREA_PARTIALLY"] = 30;
    values[valuesById[31] = "DEFENDER_IN_DEFENSE_AREA"] = 31;
    values[valuesById[32] = "MULTIPLE_CARDS"] = 32;
    values[valuesById[33] = "MULTIPLE_PLACEMENT_FAILURES"] = 33;
    values[valuesById[34] = "MULTIPLE_FOULS"] = 34;
    values[valuesById[35] = "UNSPORTING_BEHAVIOR_MINOR"] = 35;
    values[valuesById[36] = "UNSPORTING_BEHAVIOR_MAJOR"] = 36;
    return values;
})();

export const Referee = $root.Referee = (() => {

    /**
     * Properties of a Referee.
     * @exports IReferee
     * @interface IReferee
     * @property {number|Long} packetTimestamp Referee packetTimestamp
     * @property {Referee.Stage} stage Referee stage
     * @property {number|null} [stageTimeLeft] Referee stageTimeLeft
     * @property {Referee.Command} command Referee command
     * @property {number} commandCounter Referee commandCounter
     * @property {number|Long} commandTimestamp Referee commandTimestamp
     * @property {Referee.ITeamInfo} yellow Referee yellow
     * @property {Referee.ITeamInfo} blue Referee blue
     * @property {Referee.IPoint|null} [designatedPosition] Referee designatedPosition
     * @property {boolean|null} [blueTeamOnPositiveHalf] Referee blueTeamOnPositiveHalf
     * @property {Referee.Command|null} [nextCommand] Referee nextCommand
     * @property {Array.<IGameEvent>|null} [gameEvents] Referee gameEvents
     * @property {Array.<IProposedGameEvent>|null} [proposedGameEvents] Referee proposedGameEvents
     * @property {number|null} [currentActionTimeRemaining] Referee currentActionTimeRemaining
     */

    /**
     * Constructs a new Referee.
     * @exports Referee
     * @classdesc Represents a Referee.
     * @implements IReferee
     * @constructor
     * @param {IReferee=} [properties] Properties to set
     */
    function Referee(properties) {
        this.gameEvents = [];
        this.proposedGameEvents = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Referee packetTimestamp.
     * @member {number|Long} packetTimestamp
     * @memberof Referee
     * @instance
     */
    Referee.prototype.packetTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Referee stage.
     * @member {Referee.Stage} stage
     * @memberof Referee
     * @instance
     */
    Referee.prototype.stage = 0;

    /**
     * Referee stageTimeLeft.
     * @member {number} stageTimeLeft
     * @memberof Referee
     * @instance
     */
    Referee.prototype.stageTimeLeft = 0;

    /**
     * Referee command.
     * @member {Referee.Command} command
     * @memberof Referee
     * @instance
     */
    Referee.prototype.command = 0;

    /**
     * Referee commandCounter.
     * @member {number} commandCounter
     * @memberof Referee
     * @instance
     */
    Referee.prototype.commandCounter = 0;

    /**
     * Referee commandTimestamp.
     * @member {number|Long} commandTimestamp
     * @memberof Referee
     * @instance
     */
    Referee.prototype.commandTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Referee yellow.
     * @member {Referee.ITeamInfo} yellow
     * @memberof Referee
     * @instance
     */
    Referee.prototype.yellow = null;

    /**
     * Referee blue.
     * @member {Referee.ITeamInfo} blue
     * @memberof Referee
     * @instance
     */
    Referee.prototype.blue = null;

    /**
     * Referee designatedPosition.
     * @member {Referee.IPoint|null|undefined} designatedPosition
     * @memberof Referee
     * @instance
     */
    Referee.prototype.designatedPosition = null;

    /**
     * Referee blueTeamOnPositiveHalf.
     * @member {boolean} blueTeamOnPositiveHalf
     * @memberof Referee
     * @instance
     */
    Referee.prototype.blueTeamOnPositiveHalf = false;

    /**
     * Referee nextCommand.
     * @member {Referee.Command} nextCommand
     * @memberof Referee
     * @instance
     */
    Referee.prototype.nextCommand = 0;

    /**
     * Referee gameEvents.
     * @member {Array.<IGameEvent>} gameEvents
     * @memberof Referee
     * @instance
     */
    Referee.prototype.gameEvents = $util.emptyArray;

    /**
     * Referee proposedGameEvents.
     * @member {Array.<IProposedGameEvent>} proposedGameEvents
     * @memberof Referee
     * @instance
     */
    Referee.prototype.proposedGameEvents = $util.emptyArray;

    /**
     * Referee currentActionTimeRemaining.
     * @member {number} currentActionTimeRemaining
     * @memberof Referee
     * @instance
     */
    Referee.prototype.currentActionTimeRemaining = 0;

    /**
     * Creates a new Referee instance using the specified properties.
     * @function create
     * @memberof Referee
     * @static
     * @param {IReferee=} [properties] Properties to set
     * @returns {Referee} Referee instance
     */
    Referee.create = function create(properties) {
        return new Referee(properties);
    };

    /**
     * Encodes the specified Referee message. Does not implicitly {@link Referee.verify|verify} messages.
     * @function encode
     * @memberof Referee
     * @static
     * @param {IReferee} message Referee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Referee.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.packetTimestamp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stage);
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.stageTimeLeft);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.command);
        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.commandCounter);
        writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.commandTimestamp);
        $root.Referee.TeamInfo.encode(message.yellow, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        $root.Referee.TeamInfo.encode(message.blue, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition"))
            $root.Referee.Point.encode(message.designatedPosition, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.blueTeamOnPositiveHalf);
        if (message.nextCommand != null && message.hasOwnProperty("nextCommand"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nextCommand);
        if (message.gameEvents != null && message.gameEvents.length)
            for (let i = 0; i < message.gameEvents.length; ++i)
                $root.GameEvent.encode(message.gameEvents[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.proposedGameEvents != null && message.proposedGameEvents.length)
            for (let i = 0; i < message.proposedGameEvents.length; ++i)
                $root.ProposedGameEvent.encode(message.proposedGameEvents[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.currentActionTimeRemaining != null && message.hasOwnProperty("currentActionTimeRemaining"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.currentActionTimeRemaining);
        return writer;
    };

    /**
     * Encodes the specified Referee message, length delimited. Does not implicitly {@link Referee.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Referee
     * @static
     * @param {IReferee} message Referee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Referee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Referee message from the specified reader or buffer.
     * @function decode
     * @memberof Referee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Referee} Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Referee.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Referee();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.packetTimestamp = reader.uint64();
                break;
            case 2:
                message.stage = reader.int32();
                break;
            case 3:
                message.stageTimeLeft = reader.sint32();
                break;
            case 4:
                message.command = reader.int32();
                break;
            case 5:
                message.commandCounter = reader.uint32();
                break;
            case 6:
                message.commandTimestamp = reader.uint64();
                break;
            case 7:
                message.yellow = $root.Referee.TeamInfo.decode(reader, reader.uint32());
                break;
            case 8:
                message.blue = $root.Referee.TeamInfo.decode(reader, reader.uint32());
                break;
            case 9:
                message.designatedPosition = $root.Referee.Point.decode(reader, reader.uint32());
                break;
            case 10:
                message.blueTeamOnPositiveHalf = reader.bool();
                break;
            case 12:
                message.nextCommand = reader.int32();
                break;
            case 13:
                if (!(message.gameEvents && message.gameEvents.length))
                    message.gameEvents = [];
                message.gameEvents.push($root.GameEvent.decode(reader, reader.uint32()));
                break;
            case 14:
                if (!(message.proposedGameEvents && message.proposedGameEvents.length))
                    message.proposedGameEvents = [];
                message.proposedGameEvents.push($root.ProposedGameEvent.decode(reader, reader.uint32()));
                break;
            case 15:
                message.currentActionTimeRemaining = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("packetTimestamp"))
            throw $util.ProtocolError("missing required 'packetTimestamp'", { instance: message });
        if (!message.hasOwnProperty("stage"))
            throw $util.ProtocolError("missing required 'stage'", { instance: message });
        if (!message.hasOwnProperty("command"))
            throw $util.ProtocolError("missing required 'command'", { instance: message });
        if (!message.hasOwnProperty("commandCounter"))
            throw $util.ProtocolError("missing required 'commandCounter'", { instance: message });
        if (!message.hasOwnProperty("commandTimestamp"))
            throw $util.ProtocolError("missing required 'commandTimestamp'", { instance: message });
        if (!message.hasOwnProperty("yellow"))
            throw $util.ProtocolError("missing required 'yellow'", { instance: message });
        if (!message.hasOwnProperty("blue"))
            throw $util.ProtocolError("missing required 'blue'", { instance: message });
        return message;
    };

    /**
     * Decodes a Referee message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Referee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Referee} Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Referee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Referee message.
     * @function verify
     * @memberof Referee
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Referee.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.packetTimestamp) && !(message.packetTimestamp && $util.isInteger(message.packetTimestamp.low) && $util.isInteger(message.packetTimestamp.high)))
            return "packetTimestamp: integer|Long expected";
        switch (message.stage) {
        default:
            return "stage: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            break;
        }
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            if (!$util.isInteger(message.stageTimeLeft))
                return "stageTimeLeft: integer expected";
        switch (message.command) {
        default:
            return "command: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            break;
        }
        if (!$util.isInteger(message.commandCounter))
            return "commandCounter: integer expected";
        if (!$util.isInteger(message.commandTimestamp) && !(message.commandTimestamp && $util.isInteger(message.commandTimestamp.low) && $util.isInteger(message.commandTimestamp.high)))
            return "commandTimestamp: integer|Long expected";
        {
            let error = $root.Referee.TeamInfo.verify(message.yellow);
            if (error)
                return "yellow." + error;
        }
        {
            let error = $root.Referee.TeamInfo.verify(message.blue);
            if (error)
                return "blue." + error;
        }
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition")) {
            let error = $root.Referee.Point.verify(message.designatedPosition);
            if (error)
                return "designatedPosition." + error;
        }
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            if (typeof message.blueTeamOnPositiveHalf !== "boolean")
                return "blueTeamOnPositiveHalf: boolean expected";
        if (message.nextCommand != null && message.hasOwnProperty("nextCommand"))
            switch (message.nextCommand) {
            default:
                return "nextCommand: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                break;
            }
        if (message.gameEvents != null && message.hasOwnProperty("gameEvents")) {
            if (!Array.isArray(message.gameEvents))
                return "gameEvents: array expected";
            for (let i = 0; i < message.gameEvents.length; ++i) {
                let error = $root.GameEvent.verify(message.gameEvents[i]);
                if (error)
                    return "gameEvents." + error;
            }
        }
        if (message.proposedGameEvents != null && message.hasOwnProperty("proposedGameEvents")) {
            if (!Array.isArray(message.proposedGameEvents))
                return "proposedGameEvents: array expected";
            for (let i = 0; i < message.proposedGameEvents.length; ++i) {
                let error = $root.ProposedGameEvent.verify(message.proposedGameEvents[i]);
                if (error)
                    return "proposedGameEvents." + error;
            }
        }
        if (message.currentActionTimeRemaining != null && message.hasOwnProperty("currentActionTimeRemaining"))
            if (!$util.isInteger(message.currentActionTimeRemaining))
                return "currentActionTimeRemaining: integer expected";
        return null;
    };

    /**
     * Creates a Referee message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Referee
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Referee} Referee
     */
    Referee.fromObject = function fromObject(object) {
        if (object instanceof $root.Referee)
            return object;
        let message = new $root.Referee();
        if (object.packetTimestamp != null)
            if ($util.Long)
                (message.packetTimestamp = $util.Long.fromValue(object.packetTimestamp)).unsigned = true;
            else if (typeof object.packetTimestamp === "string")
                message.packetTimestamp = parseInt(object.packetTimestamp, 10);
            else if (typeof object.packetTimestamp === "number")
                message.packetTimestamp = object.packetTimestamp;
            else if (typeof object.packetTimestamp === "object")
                message.packetTimestamp = new $util.LongBits(object.packetTimestamp.low >>> 0, object.packetTimestamp.high >>> 0).toNumber(true);
        switch (object.stage) {
        case "NORMAL_FIRST_HALF_PRE":
        case 0:
            message.stage = 0;
            break;
        case "NORMAL_FIRST_HALF":
        case 1:
            message.stage = 1;
            break;
        case "NORMAL_HALF_TIME":
        case 2:
            message.stage = 2;
            break;
        case "NORMAL_SECOND_HALF_PRE":
        case 3:
            message.stage = 3;
            break;
        case "NORMAL_SECOND_HALF":
        case 4:
            message.stage = 4;
            break;
        case "EXTRA_TIME_BREAK":
        case 5:
            message.stage = 5;
            break;
        case "EXTRA_FIRST_HALF_PRE":
        case 6:
            message.stage = 6;
            break;
        case "EXTRA_FIRST_HALF":
        case 7:
            message.stage = 7;
            break;
        case "EXTRA_HALF_TIME":
        case 8:
            message.stage = 8;
            break;
        case "EXTRA_SECOND_HALF_PRE":
        case 9:
            message.stage = 9;
            break;
        case "EXTRA_SECOND_HALF":
        case 10:
            message.stage = 10;
            break;
        case "PENALTY_SHOOTOUT_BREAK":
        case 11:
            message.stage = 11;
            break;
        case "PENALTY_SHOOTOUT":
        case 12:
            message.stage = 12;
            break;
        case "POST_GAME":
        case 13:
            message.stage = 13;
            break;
        }
        if (object.stageTimeLeft != null)
            message.stageTimeLeft = object.stageTimeLeft | 0;
        switch (object.command) {
        case "HALT":
        case 0:
            message.command = 0;
            break;
        case "STOP":
        case 1:
            message.command = 1;
            break;
        case "NORMAL_START":
        case 2:
            message.command = 2;
            break;
        case "FORCE_START":
        case 3:
            message.command = 3;
            break;
        case "PREPARE_KICKOFF_YELLOW":
        case 4:
            message.command = 4;
            break;
        case "PREPARE_KICKOFF_BLUE":
        case 5:
            message.command = 5;
            break;
        case "PREPARE_PENALTY_YELLOW":
        case 6:
            message.command = 6;
            break;
        case "PREPARE_PENALTY_BLUE":
        case 7:
            message.command = 7;
            break;
        case "DIRECT_FREE_YELLOW":
        case 8:
            message.command = 8;
            break;
        case "DIRECT_FREE_BLUE":
        case 9:
            message.command = 9;
            break;
        case "INDIRECT_FREE_YELLOW":
        case 10:
            message.command = 10;
            break;
        case "INDIRECT_FREE_BLUE":
        case 11:
            message.command = 11;
            break;
        case "TIMEOUT_YELLOW":
        case 12:
            message.command = 12;
            break;
        case "TIMEOUT_BLUE":
        case 13:
            message.command = 13;
            break;
        case "GOAL_YELLOW":
        case 14:
            message.command = 14;
            break;
        case "GOAL_BLUE":
        case 15:
            message.command = 15;
            break;
        case "BALL_PLACEMENT_YELLOW":
        case 16:
            message.command = 16;
            break;
        case "BALL_PLACEMENT_BLUE":
        case 17:
            message.command = 17;
            break;
        }
        if (object.commandCounter != null)
            message.commandCounter = object.commandCounter >>> 0;
        if (object.commandTimestamp != null)
            if ($util.Long)
                (message.commandTimestamp = $util.Long.fromValue(object.commandTimestamp)).unsigned = true;
            else if (typeof object.commandTimestamp === "string")
                message.commandTimestamp = parseInt(object.commandTimestamp, 10);
            else if (typeof object.commandTimestamp === "number")
                message.commandTimestamp = object.commandTimestamp;
            else if (typeof object.commandTimestamp === "object")
                message.commandTimestamp = new $util.LongBits(object.commandTimestamp.low >>> 0, object.commandTimestamp.high >>> 0).toNumber(true);
        if (object.yellow != null) {
            if (typeof object.yellow !== "object")
                throw TypeError(".Referee.yellow: object expected");
            message.yellow = $root.Referee.TeamInfo.fromObject(object.yellow);
        }
        if (object.blue != null) {
            if (typeof object.blue !== "object")
                throw TypeError(".Referee.blue: object expected");
            message.blue = $root.Referee.TeamInfo.fromObject(object.blue);
        }
        if (object.designatedPosition != null) {
            if (typeof object.designatedPosition !== "object")
                throw TypeError(".Referee.designatedPosition: object expected");
            message.designatedPosition = $root.Referee.Point.fromObject(object.designatedPosition);
        }
        if (object.blueTeamOnPositiveHalf != null)
            message.blueTeamOnPositiveHalf = Boolean(object.blueTeamOnPositiveHalf);
        switch (object.nextCommand) {
        case "HALT":
        case 0:
            message.nextCommand = 0;
            break;
        case "STOP":
        case 1:
            message.nextCommand = 1;
            break;
        case "NORMAL_START":
        case 2:
            message.nextCommand = 2;
            break;
        case "FORCE_START":
        case 3:
            message.nextCommand = 3;
            break;
        case "PREPARE_KICKOFF_YELLOW":
        case 4:
            message.nextCommand = 4;
            break;
        case "PREPARE_KICKOFF_BLUE":
        case 5:
            message.nextCommand = 5;
            break;
        case "PREPARE_PENALTY_YELLOW":
        case 6:
            message.nextCommand = 6;
            break;
        case "PREPARE_PENALTY_BLUE":
        case 7:
            message.nextCommand = 7;
            break;
        case "DIRECT_FREE_YELLOW":
        case 8:
            message.nextCommand = 8;
            break;
        case "DIRECT_FREE_BLUE":
        case 9:
            message.nextCommand = 9;
            break;
        case "INDIRECT_FREE_YELLOW":
        case 10:
            message.nextCommand = 10;
            break;
        case "INDIRECT_FREE_BLUE":
        case 11:
            message.nextCommand = 11;
            break;
        case "TIMEOUT_YELLOW":
        case 12:
            message.nextCommand = 12;
            break;
        case "TIMEOUT_BLUE":
        case 13:
            message.nextCommand = 13;
            break;
        case "GOAL_YELLOW":
        case 14:
            message.nextCommand = 14;
            break;
        case "GOAL_BLUE":
        case 15:
            message.nextCommand = 15;
            break;
        case "BALL_PLACEMENT_YELLOW":
        case 16:
            message.nextCommand = 16;
            break;
        case "BALL_PLACEMENT_BLUE":
        case 17:
            message.nextCommand = 17;
            break;
        }
        if (object.gameEvents) {
            if (!Array.isArray(object.gameEvents))
                throw TypeError(".Referee.gameEvents: array expected");
            message.gameEvents = [];
            for (let i = 0; i < object.gameEvents.length; ++i) {
                if (typeof object.gameEvents[i] !== "object")
                    throw TypeError(".Referee.gameEvents: object expected");
                message.gameEvents[i] = $root.GameEvent.fromObject(object.gameEvents[i]);
            }
        }
        if (object.proposedGameEvents) {
            if (!Array.isArray(object.proposedGameEvents))
                throw TypeError(".Referee.proposedGameEvents: array expected");
            message.proposedGameEvents = [];
            for (let i = 0; i < object.proposedGameEvents.length; ++i) {
                if (typeof object.proposedGameEvents[i] !== "object")
                    throw TypeError(".Referee.proposedGameEvents: object expected");
                message.proposedGameEvents[i] = $root.ProposedGameEvent.fromObject(object.proposedGameEvents[i]);
            }
        }
        if (object.currentActionTimeRemaining != null)
            message.currentActionTimeRemaining = object.currentActionTimeRemaining | 0;
        return message;
    };

    /**
     * Creates a plain object from a Referee message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Referee
     * @static
     * @param {Referee} message Referee
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Referee.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.gameEvents = [];
            object.proposedGameEvents = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.packetTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.packetTimestamp = options.longs === String ? "0" : 0;
            object.stage = options.enums === String ? "NORMAL_FIRST_HALF_PRE" : 0;
            object.stageTimeLeft = 0;
            object.command = options.enums === String ? "HALT" : 0;
            object.commandCounter = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.commandTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.commandTimestamp = options.longs === String ? "0" : 0;
            object.yellow = null;
            object.blue = null;
            object.designatedPosition = null;
            object.blueTeamOnPositiveHalf = false;
            object.nextCommand = options.enums === String ? "HALT" : 0;
            object.currentActionTimeRemaining = 0;
        }
        if (message.packetTimestamp != null && message.hasOwnProperty("packetTimestamp"))
            if (typeof message.packetTimestamp === "number")
                object.packetTimestamp = options.longs === String ? String(message.packetTimestamp) : message.packetTimestamp;
            else
                object.packetTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.packetTimestamp) : options.longs === Number ? new $util.LongBits(message.packetTimestamp.low >>> 0, message.packetTimestamp.high >>> 0).toNumber(true) : message.packetTimestamp;
        if (message.stage != null && message.hasOwnProperty("stage"))
            object.stage = options.enums === String ? $root.Referee.Stage[message.stage] : message.stage;
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            object.stageTimeLeft = message.stageTimeLeft;
        if (message.command != null && message.hasOwnProperty("command"))
            object.command = options.enums === String ? $root.Referee.Command[message.command] : message.command;
        if (message.commandCounter != null && message.hasOwnProperty("commandCounter"))
            object.commandCounter = message.commandCounter;
        if (message.commandTimestamp != null && message.hasOwnProperty("commandTimestamp"))
            if (typeof message.commandTimestamp === "number")
                object.commandTimestamp = options.longs === String ? String(message.commandTimestamp) : message.commandTimestamp;
            else
                object.commandTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.commandTimestamp) : options.longs === Number ? new $util.LongBits(message.commandTimestamp.low >>> 0, message.commandTimestamp.high >>> 0).toNumber(true) : message.commandTimestamp;
        if (message.yellow != null && message.hasOwnProperty("yellow"))
            object.yellow = $root.Referee.TeamInfo.toObject(message.yellow, options);
        if (message.blue != null && message.hasOwnProperty("blue"))
            object.blue = $root.Referee.TeamInfo.toObject(message.blue, options);
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition"))
            object.designatedPosition = $root.Referee.Point.toObject(message.designatedPosition, options);
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            object.blueTeamOnPositiveHalf = message.blueTeamOnPositiveHalf;
        if (message.nextCommand != null && message.hasOwnProperty("nextCommand"))
            object.nextCommand = options.enums === String ? $root.Referee.Command[message.nextCommand] : message.nextCommand;
        if (message.gameEvents && message.gameEvents.length) {
            object.gameEvents = [];
            for (let j = 0; j < message.gameEvents.length; ++j)
                object.gameEvents[j] = $root.GameEvent.toObject(message.gameEvents[j], options);
        }
        if (message.proposedGameEvents && message.proposedGameEvents.length) {
            object.proposedGameEvents = [];
            for (let j = 0; j < message.proposedGameEvents.length; ++j)
                object.proposedGameEvents[j] = $root.ProposedGameEvent.toObject(message.proposedGameEvents[j], options);
        }
        if (message.currentActionTimeRemaining != null && message.hasOwnProperty("currentActionTimeRemaining"))
            object.currentActionTimeRemaining = message.currentActionTimeRemaining;
        return object;
    };

    /**
     * Converts this Referee to JSON.
     * @function toJSON
     * @memberof Referee
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Referee.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Stage enum.
     * @name Referee.Stage
     * @enum {string}
     * @property {number} NORMAL_FIRST_HALF_PRE=0 NORMAL_FIRST_HALF_PRE value
     * @property {number} NORMAL_FIRST_HALF=1 NORMAL_FIRST_HALF value
     * @property {number} NORMAL_HALF_TIME=2 NORMAL_HALF_TIME value
     * @property {number} NORMAL_SECOND_HALF_PRE=3 NORMAL_SECOND_HALF_PRE value
     * @property {number} NORMAL_SECOND_HALF=4 NORMAL_SECOND_HALF value
     * @property {number} EXTRA_TIME_BREAK=5 EXTRA_TIME_BREAK value
     * @property {number} EXTRA_FIRST_HALF_PRE=6 EXTRA_FIRST_HALF_PRE value
     * @property {number} EXTRA_FIRST_HALF=7 EXTRA_FIRST_HALF value
     * @property {number} EXTRA_HALF_TIME=8 EXTRA_HALF_TIME value
     * @property {number} EXTRA_SECOND_HALF_PRE=9 EXTRA_SECOND_HALF_PRE value
     * @property {number} EXTRA_SECOND_HALF=10 EXTRA_SECOND_HALF value
     * @property {number} PENALTY_SHOOTOUT_BREAK=11 PENALTY_SHOOTOUT_BREAK value
     * @property {number} PENALTY_SHOOTOUT=12 PENALTY_SHOOTOUT value
     * @property {number} POST_GAME=13 POST_GAME value
     */
    Referee.Stage = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL_FIRST_HALF_PRE"] = 0;
        values[valuesById[1] = "NORMAL_FIRST_HALF"] = 1;
        values[valuesById[2] = "NORMAL_HALF_TIME"] = 2;
        values[valuesById[3] = "NORMAL_SECOND_HALF_PRE"] = 3;
        values[valuesById[4] = "NORMAL_SECOND_HALF"] = 4;
        values[valuesById[5] = "EXTRA_TIME_BREAK"] = 5;
        values[valuesById[6] = "EXTRA_FIRST_HALF_PRE"] = 6;
        values[valuesById[7] = "EXTRA_FIRST_HALF"] = 7;
        values[valuesById[8] = "EXTRA_HALF_TIME"] = 8;
        values[valuesById[9] = "EXTRA_SECOND_HALF_PRE"] = 9;
        values[valuesById[10] = "EXTRA_SECOND_HALF"] = 10;
        values[valuesById[11] = "PENALTY_SHOOTOUT_BREAK"] = 11;
        values[valuesById[12] = "PENALTY_SHOOTOUT"] = 12;
        values[valuesById[13] = "POST_GAME"] = 13;
        return values;
    })();

    /**
     * Command enum.
     * @name Referee.Command
     * @enum {string}
     * @property {number} HALT=0 HALT value
     * @property {number} STOP=1 STOP value
     * @property {number} NORMAL_START=2 NORMAL_START value
     * @property {number} FORCE_START=3 FORCE_START value
     * @property {number} PREPARE_KICKOFF_YELLOW=4 PREPARE_KICKOFF_YELLOW value
     * @property {number} PREPARE_KICKOFF_BLUE=5 PREPARE_KICKOFF_BLUE value
     * @property {number} PREPARE_PENALTY_YELLOW=6 PREPARE_PENALTY_YELLOW value
     * @property {number} PREPARE_PENALTY_BLUE=7 PREPARE_PENALTY_BLUE value
     * @property {number} DIRECT_FREE_YELLOW=8 DIRECT_FREE_YELLOW value
     * @property {number} DIRECT_FREE_BLUE=9 DIRECT_FREE_BLUE value
     * @property {number} INDIRECT_FREE_YELLOW=10 INDIRECT_FREE_YELLOW value
     * @property {number} INDIRECT_FREE_BLUE=11 INDIRECT_FREE_BLUE value
     * @property {number} TIMEOUT_YELLOW=12 TIMEOUT_YELLOW value
     * @property {number} TIMEOUT_BLUE=13 TIMEOUT_BLUE value
     * @property {number} GOAL_YELLOW=14 GOAL_YELLOW value
     * @property {number} GOAL_BLUE=15 GOAL_BLUE value
     * @property {number} BALL_PLACEMENT_YELLOW=16 BALL_PLACEMENT_YELLOW value
     * @property {number} BALL_PLACEMENT_BLUE=17 BALL_PLACEMENT_BLUE value
     */
    Referee.Command = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HALT"] = 0;
        values[valuesById[1] = "STOP"] = 1;
        values[valuesById[2] = "NORMAL_START"] = 2;
        values[valuesById[3] = "FORCE_START"] = 3;
        values[valuesById[4] = "PREPARE_KICKOFF_YELLOW"] = 4;
        values[valuesById[5] = "PREPARE_KICKOFF_BLUE"] = 5;
        values[valuesById[6] = "PREPARE_PENALTY_YELLOW"] = 6;
        values[valuesById[7] = "PREPARE_PENALTY_BLUE"] = 7;
        values[valuesById[8] = "DIRECT_FREE_YELLOW"] = 8;
        values[valuesById[9] = "DIRECT_FREE_BLUE"] = 9;
        values[valuesById[10] = "INDIRECT_FREE_YELLOW"] = 10;
        values[valuesById[11] = "INDIRECT_FREE_BLUE"] = 11;
        values[valuesById[12] = "TIMEOUT_YELLOW"] = 12;
        values[valuesById[13] = "TIMEOUT_BLUE"] = 13;
        values[valuesById[14] = "GOAL_YELLOW"] = 14;
        values[valuesById[15] = "GOAL_BLUE"] = 15;
        values[valuesById[16] = "BALL_PLACEMENT_YELLOW"] = 16;
        values[valuesById[17] = "BALL_PLACEMENT_BLUE"] = 17;
        return values;
    })();

    Referee.TeamInfo = (function() {

        /**
         * Properties of a TeamInfo.
         * @memberof Referee
         * @interface ITeamInfo
         * @property {string} name TeamInfo name
         * @property {number} score TeamInfo score
         * @property {number} redCards TeamInfo redCards
         * @property {Array.<number>|null} [yellowCardTimes] TeamInfo yellowCardTimes
         * @property {number} yellowCards TeamInfo yellowCards
         * @property {number} timeouts TeamInfo timeouts
         * @property {number} timeoutTime TeamInfo timeoutTime
         * @property {number} goalkeeper TeamInfo goalkeeper
         * @property {number|null} [foulCounter] TeamInfo foulCounter
         * @property {number|null} [ballPlacementFailures] TeamInfo ballPlacementFailures
         * @property {boolean|null} [canPlaceBall] TeamInfo canPlaceBall
         * @property {number|null} [maxAllowedBots] TeamInfo maxAllowedBots
         */

        /**
         * Constructs a new TeamInfo.
         * @memberof Referee
         * @classdesc Represents a TeamInfo.
         * @implements ITeamInfo
         * @constructor
         * @param {Referee.ITeamInfo=} [properties] Properties to set
         */
        function TeamInfo(properties) {
            this.yellowCardTimes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamInfo name.
         * @member {string} name
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.name = "";

        /**
         * TeamInfo score.
         * @member {number} score
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.score = 0;

        /**
         * TeamInfo redCards.
         * @member {number} redCards
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.redCards = 0;

        /**
         * TeamInfo yellowCardTimes.
         * @member {Array.<number>} yellowCardTimes
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.yellowCardTimes = $util.emptyArray;

        /**
         * TeamInfo yellowCards.
         * @member {number} yellowCards
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.yellowCards = 0;

        /**
         * TeamInfo timeouts.
         * @member {number} timeouts
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.timeouts = 0;

        /**
         * TeamInfo timeoutTime.
         * @member {number} timeoutTime
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.timeoutTime = 0;

        /**
         * TeamInfo goalkeeper.
         * @member {number} goalkeeper
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.goalkeeper = 0;

        /**
         * TeamInfo foulCounter.
         * @member {number} foulCounter
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.foulCounter = 0;

        /**
         * TeamInfo ballPlacementFailures.
         * @member {number} ballPlacementFailures
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.ballPlacementFailures = 0;

        /**
         * TeamInfo canPlaceBall.
         * @member {boolean} canPlaceBall
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.canPlaceBall = false;

        /**
         * TeamInfo maxAllowedBots.
         * @member {number} maxAllowedBots
         * @memberof Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.maxAllowedBots = 0;

        /**
         * Creates a new TeamInfo instance using the specified properties.
         * @function create
         * @memberof Referee.TeamInfo
         * @static
         * @param {Referee.ITeamInfo=} [properties] Properties to set
         * @returns {Referee.TeamInfo} TeamInfo instance
         */
        TeamInfo.create = function create(properties) {
            return new TeamInfo(properties);
        };

        /**
         * Encodes the specified TeamInfo message. Does not implicitly {@link Referee.TeamInfo.verify|verify} messages.
         * @function encode
         * @memberof Referee.TeamInfo
         * @static
         * @param {Referee.ITeamInfo} message TeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.score);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.redCards);
            if (message.yellowCardTimes != null && message.yellowCardTimes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.yellowCardTimes.length; ++i)
                    writer.uint32(message.yellowCardTimes[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.yellowCards);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.timeouts);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.timeoutTime);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.goalkeeper);
            if (message.foulCounter != null && message.hasOwnProperty("foulCounter"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.foulCounter);
            if (message.ballPlacementFailures != null && message.hasOwnProperty("ballPlacementFailures"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.ballPlacementFailures);
            if (message.canPlaceBall != null && message.hasOwnProperty("canPlaceBall"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.canPlaceBall);
            if (message.maxAllowedBots != null && message.hasOwnProperty("maxAllowedBots"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.maxAllowedBots);
            return writer;
        };

        /**
         * Encodes the specified TeamInfo message, length delimited. Does not implicitly {@link Referee.TeamInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Referee.TeamInfo
         * @static
         * @param {Referee.ITeamInfo} message TeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Referee.TeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Referee.TeamInfo} TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Referee.TeamInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.score = reader.uint32();
                    break;
                case 3:
                    message.redCards = reader.uint32();
                    break;
                case 4:
                    if (!(message.yellowCardTimes && message.yellowCardTimes.length))
                        message.yellowCardTimes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.yellowCardTimes.push(reader.uint32());
                    } else
                        message.yellowCardTimes.push(reader.uint32());
                    break;
                case 5:
                    message.yellowCards = reader.uint32();
                    break;
                case 6:
                    message.timeouts = reader.uint32();
                    break;
                case 7:
                    message.timeoutTime = reader.uint32();
                    break;
                case 8:
                    message.goalkeeper = reader.uint32();
                    break;
                case 9:
                    message.foulCounter = reader.uint32();
                    break;
                case 10:
                    message.ballPlacementFailures = reader.uint32();
                    break;
                case 12:
                    message.canPlaceBall = reader.bool();
                    break;
                case 13:
                    message.maxAllowedBots = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("score"))
                throw $util.ProtocolError("missing required 'score'", { instance: message });
            if (!message.hasOwnProperty("redCards"))
                throw $util.ProtocolError("missing required 'redCards'", { instance: message });
            if (!message.hasOwnProperty("yellowCards"))
                throw $util.ProtocolError("missing required 'yellowCards'", { instance: message });
            if (!message.hasOwnProperty("timeouts"))
                throw $util.ProtocolError("missing required 'timeouts'", { instance: message });
            if (!message.hasOwnProperty("timeoutTime"))
                throw $util.ProtocolError("missing required 'timeoutTime'", { instance: message });
            if (!message.hasOwnProperty("goalkeeper"))
                throw $util.ProtocolError("missing required 'goalkeeper'", { instance: message });
            return message;
        };

        /**
         * Decodes a TeamInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Referee.TeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Referee.TeamInfo} TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamInfo message.
         * @function verify
         * @memberof Referee.TeamInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.score))
                return "score: integer expected";
            if (!$util.isInteger(message.redCards))
                return "redCards: integer expected";
            if (message.yellowCardTimes != null && message.hasOwnProperty("yellowCardTimes")) {
                if (!Array.isArray(message.yellowCardTimes))
                    return "yellowCardTimes: array expected";
                for (let i = 0; i < message.yellowCardTimes.length; ++i)
                    if (!$util.isInteger(message.yellowCardTimes[i]))
                        return "yellowCardTimes: integer[] expected";
            }
            if (!$util.isInteger(message.yellowCards))
                return "yellowCards: integer expected";
            if (!$util.isInteger(message.timeouts))
                return "timeouts: integer expected";
            if (!$util.isInteger(message.timeoutTime))
                return "timeoutTime: integer expected";
            if (!$util.isInteger(message.goalkeeper))
                return "goalkeeper: integer expected";
            if (message.foulCounter != null && message.hasOwnProperty("foulCounter"))
                if (!$util.isInteger(message.foulCounter))
                    return "foulCounter: integer expected";
            if (message.ballPlacementFailures != null && message.hasOwnProperty("ballPlacementFailures"))
                if (!$util.isInteger(message.ballPlacementFailures))
                    return "ballPlacementFailures: integer expected";
            if (message.canPlaceBall != null && message.hasOwnProperty("canPlaceBall"))
                if (typeof message.canPlaceBall !== "boolean")
                    return "canPlaceBall: boolean expected";
            if (message.maxAllowedBots != null && message.hasOwnProperty("maxAllowedBots"))
                if (!$util.isInteger(message.maxAllowedBots))
                    return "maxAllowedBots: integer expected";
            return null;
        };

        /**
         * Creates a TeamInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Referee.TeamInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Referee.TeamInfo} TeamInfo
         */
        TeamInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Referee.TeamInfo)
                return object;
            let message = new $root.Referee.TeamInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.score != null)
                message.score = object.score >>> 0;
            if (object.redCards != null)
                message.redCards = object.redCards >>> 0;
            if (object.yellowCardTimes) {
                if (!Array.isArray(object.yellowCardTimes))
                    throw TypeError(".Referee.TeamInfo.yellowCardTimes: array expected");
                message.yellowCardTimes = [];
                for (let i = 0; i < object.yellowCardTimes.length; ++i)
                    message.yellowCardTimes[i] = object.yellowCardTimes[i] >>> 0;
            }
            if (object.yellowCards != null)
                message.yellowCards = object.yellowCards >>> 0;
            if (object.timeouts != null)
                message.timeouts = object.timeouts >>> 0;
            if (object.timeoutTime != null)
                message.timeoutTime = object.timeoutTime >>> 0;
            if (object.goalkeeper != null)
                message.goalkeeper = object.goalkeeper >>> 0;
            if (object.foulCounter != null)
                message.foulCounter = object.foulCounter >>> 0;
            if (object.ballPlacementFailures != null)
                message.ballPlacementFailures = object.ballPlacementFailures >>> 0;
            if (object.canPlaceBall != null)
                message.canPlaceBall = Boolean(object.canPlaceBall);
            if (object.maxAllowedBots != null)
                message.maxAllowedBots = object.maxAllowedBots >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Referee.TeamInfo
         * @static
         * @param {Referee.TeamInfo} message TeamInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.yellowCardTimes = [];
            if (options.defaults) {
                object.name = "";
                object.score = 0;
                object.redCards = 0;
                object.yellowCards = 0;
                object.timeouts = 0;
                object.timeoutTime = 0;
                object.goalkeeper = 0;
                object.foulCounter = 0;
                object.ballPlacementFailures = 0;
                object.canPlaceBall = false;
                object.maxAllowedBots = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.redCards != null && message.hasOwnProperty("redCards"))
                object.redCards = message.redCards;
            if (message.yellowCardTimes && message.yellowCardTimes.length) {
                object.yellowCardTimes = [];
                for (let j = 0; j < message.yellowCardTimes.length; ++j)
                    object.yellowCardTimes[j] = message.yellowCardTimes[j];
            }
            if (message.yellowCards != null && message.hasOwnProperty("yellowCards"))
                object.yellowCards = message.yellowCards;
            if (message.timeouts != null && message.hasOwnProperty("timeouts"))
                object.timeouts = message.timeouts;
            if (message.timeoutTime != null && message.hasOwnProperty("timeoutTime"))
                object.timeoutTime = message.timeoutTime;
            if (message.goalkeeper != null && message.hasOwnProperty("goalkeeper"))
                object.goalkeeper = message.goalkeeper;
            if (message.foulCounter != null && message.hasOwnProperty("foulCounter"))
                object.foulCounter = message.foulCounter;
            if (message.ballPlacementFailures != null && message.hasOwnProperty("ballPlacementFailures"))
                object.ballPlacementFailures = message.ballPlacementFailures;
            if (message.canPlaceBall != null && message.hasOwnProperty("canPlaceBall"))
                object.canPlaceBall = message.canPlaceBall;
            if (message.maxAllowedBots != null && message.hasOwnProperty("maxAllowedBots"))
                object.maxAllowedBots = message.maxAllowedBots;
            return object;
        };

        /**
         * Converts this TeamInfo to JSON.
         * @function toJSON
         * @memberof Referee.TeamInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamInfo;
    })();

    Referee.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof Referee
         * @interface IPoint
         * @property {number} x Point x
         * @property {number} y Point y
         */

        /**
         * Constructs a new Point.
         * @memberof Referee
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {Referee.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof Referee.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof Referee.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof Referee.Point
         * @static
         * @param {Referee.IPoint=} [properties] Properties to set
         * @returns {Referee.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link Referee.Point.verify|verify} messages.
         * @function encode
         * @memberof Referee.Point
         * @static
         * @param {Referee.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link Referee.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Referee.Point
         * @static
         * @param {Referee.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof Referee.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Referee.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Referee.Point();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Referee.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Referee.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof Referee.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Referee.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Referee.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.Referee.Point)
                return object;
            let message = new $root.Referee.Point();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Referee.Point
         * @static
         * @param {Referee.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof Referee.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    return Referee;
})();

export const ProposedGameEvent = $root.ProposedGameEvent = (() => {

    /**
     * Properties of a ProposedGameEvent.
     * @exports IProposedGameEvent
     * @interface IProposedGameEvent
     * @property {number|Long} validUntil ProposedGameEvent validUntil
     * @property {string} proposerId ProposedGameEvent proposerId
     * @property {IGameEvent} gameEvent ProposedGameEvent gameEvent
     */

    /**
     * Constructs a new ProposedGameEvent.
     * @exports ProposedGameEvent
     * @classdesc Represents a ProposedGameEvent.
     * @implements IProposedGameEvent
     * @constructor
     * @param {IProposedGameEvent=} [properties] Properties to set
     */
    function ProposedGameEvent(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProposedGameEvent validUntil.
     * @member {number|Long} validUntil
     * @memberof ProposedGameEvent
     * @instance
     */
    ProposedGameEvent.prototype.validUntil = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ProposedGameEvent proposerId.
     * @member {string} proposerId
     * @memberof ProposedGameEvent
     * @instance
     */
    ProposedGameEvent.prototype.proposerId = "";

    /**
     * ProposedGameEvent gameEvent.
     * @member {IGameEvent} gameEvent
     * @memberof ProposedGameEvent
     * @instance
     */
    ProposedGameEvent.prototype.gameEvent = null;

    /**
     * Creates a new ProposedGameEvent instance using the specified properties.
     * @function create
     * @memberof ProposedGameEvent
     * @static
     * @param {IProposedGameEvent=} [properties] Properties to set
     * @returns {ProposedGameEvent} ProposedGameEvent instance
     */
    ProposedGameEvent.create = function create(properties) {
        return new ProposedGameEvent(properties);
    };

    /**
     * Encodes the specified ProposedGameEvent message. Does not implicitly {@link ProposedGameEvent.verify|verify} messages.
     * @function encode
     * @memberof ProposedGameEvent
     * @static
     * @param {IProposedGameEvent} message ProposedGameEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProposedGameEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.validUntil);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.proposerId);
        $root.GameEvent.encode(message.gameEvent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProposedGameEvent message, length delimited. Does not implicitly {@link ProposedGameEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProposedGameEvent
     * @static
     * @param {IProposedGameEvent} message ProposedGameEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProposedGameEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProposedGameEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProposedGameEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProposedGameEvent} ProposedGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProposedGameEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProposedGameEvent();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.validUntil = reader.uint64();
                break;
            case 2:
                message.proposerId = reader.string();
                break;
            case 3:
                message.gameEvent = $root.GameEvent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("validUntil"))
            throw $util.ProtocolError("missing required 'validUntil'", { instance: message });
        if (!message.hasOwnProperty("proposerId"))
            throw $util.ProtocolError("missing required 'proposerId'", { instance: message });
        if (!message.hasOwnProperty("gameEvent"))
            throw $util.ProtocolError("missing required 'gameEvent'", { instance: message });
        return message;
    };

    /**
     * Decodes a ProposedGameEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProposedGameEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProposedGameEvent} ProposedGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProposedGameEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProposedGameEvent message.
     * @function verify
     * @memberof ProposedGameEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProposedGameEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.validUntil) && !(message.validUntil && $util.isInteger(message.validUntil.low) && $util.isInteger(message.validUntil.high)))
            return "validUntil: integer|Long expected";
        if (!$util.isString(message.proposerId))
            return "proposerId: string expected";
        {
            let error = $root.GameEvent.verify(message.gameEvent);
            if (error)
                return "gameEvent." + error;
        }
        return null;
    };

    /**
     * Creates a ProposedGameEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProposedGameEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProposedGameEvent} ProposedGameEvent
     */
    ProposedGameEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ProposedGameEvent)
            return object;
        let message = new $root.ProposedGameEvent();
        if (object.validUntil != null)
            if ($util.Long)
                (message.validUntil = $util.Long.fromValue(object.validUntil)).unsigned = true;
            else if (typeof object.validUntil === "string")
                message.validUntil = parseInt(object.validUntil, 10);
            else if (typeof object.validUntil === "number")
                message.validUntil = object.validUntil;
            else if (typeof object.validUntil === "object")
                message.validUntil = new $util.LongBits(object.validUntil.low >>> 0, object.validUntil.high >>> 0).toNumber(true);
        if (object.proposerId != null)
            message.proposerId = String(object.proposerId);
        if (object.gameEvent != null) {
            if (typeof object.gameEvent !== "object")
                throw TypeError(".ProposedGameEvent.gameEvent: object expected");
            message.gameEvent = $root.GameEvent.fromObject(object.gameEvent);
        }
        return message;
    };

    /**
     * Creates a plain object from a ProposedGameEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProposedGameEvent
     * @static
     * @param {ProposedGameEvent} message ProposedGameEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProposedGameEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.validUntil = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.validUntil = options.longs === String ? "0" : 0;
            object.proposerId = "";
            object.gameEvent = null;
        }
        if (message.validUntil != null && message.hasOwnProperty("validUntil"))
            if (typeof message.validUntil === "number")
                object.validUntil = options.longs === String ? String(message.validUntil) : message.validUntil;
            else
                object.validUntil = options.longs === String ? $util.Long.prototype.toString.call(message.validUntil) : options.longs === Number ? new $util.LongBits(message.validUntil.low >>> 0, message.validUntil.high >>> 0).toNumber(true) : message.validUntil;
        if (message.proposerId != null && message.hasOwnProperty("proposerId"))
            object.proposerId = message.proposerId;
        if (message.gameEvent != null && message.hasOwnProperty("gameEvent"))
            object.gameEvent = $root.GameEvent.toObject(message.gameEvent, options);
        return object;
    };

    /**
     * Converts this ProposedGameEvent to JSON.
     * @function toJSON
     * @memberof ProposedGameEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProposedGameEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProposedGameEvent;
})();

export { $root as default };
