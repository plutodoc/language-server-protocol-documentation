# Message Documentation

As said LSP defines a set of requests, responses and notifications. Each of those are document using the following format:

- a header describing the request
- an optional _Client capability_ section describing the client capability of the request. This includes the client capabilities property path and JSON structure.
- an optional _Server Capability_ section describing the server capability of the request. This includes the server capabilities property path and JSON structure. Clients should ignore server capabilities they don't understand (e.g. the initialize request shouldn't fail in this case).
- an optional _Registration Options_ section describing the registration option if the request or notification supports dynamic capability registration. See the [register](#client_registerCapability) and [unregister](#client_unregisterCapability) request for how this works in detail.
- a _Request_ section describing the format of the request sent. The method is a string identifying the request the params are documented using a TypeScript interface. It is also documented whether the request supports work done progress and partial result progress.
- a _Response_ section describing the format of the response. The result item describes the returned data in case of a success. The optional partial result item describes the returned data of a partial result notification. The error.data describes the returned data in case of an error. Please remember that in case of a failure the response already contains an error.code and an error.message field. These fields are only specified if the protocol forces the use of certain error codes or messages. In cases where the server can decide on these values freely they aren't listed here.
