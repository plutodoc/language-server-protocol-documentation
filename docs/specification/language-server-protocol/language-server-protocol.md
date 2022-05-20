# Language Server Protocol

The language server protocol defines a set of JSON-RPC request, response and notification messages which are exchanged using the above base protocol. This section starts describing the basic JSON structures used in the protocol. The document uses TypeScript interfaces in strict mode to describe these. This means for example that a `null` value has to be explicitly listed and that a mandatory property must be listed even if a falsify value might exist. Based on the basic JSON structures, the actual requests with their responses and the notifications are described.

An example would be a request send from the client to the server to request a hover value for a symbol at a certain position in a text document. The request's method would be `textDocument/hover` with a parameter like this:

```typescript
interface HoverParams {
  textDocument: string; /** The text document's URI in string form */
  position: { line: uinteger; character: uinteger };
}
```

The result of the request would be the hover to be presented. In its simple form it can be a string. So the result looks like this:

```typescript
interface HoverResult {
  value: string;
}
```

Please also note that a response return value of `null` indicates no result. It doesn't tell the client to resend the request.

In general, the language server protocol supports JSON-RPC messages, however the base protocol defined here uses a convention such that the parameters passed to request/notification messages should be of `object` type (if passed at all). However, this does not disallow using `Array` parameter types in custom messages.

The protocol currently assumes that one server serves one tool. There is currently no support in the protocol to share one server between different tools. Such a sharing would require additional protocol e.g. to lock a document to support concurrent editing.
