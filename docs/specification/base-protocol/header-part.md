# Header Part

The header part consists of header fields. Each header field is comprised of a name and a value, separated by ': ' (a colon and a space). The structure of header fields conform to the [HTTP semantic](https://tools.ietf.org/html/rfc7230#section-3.2). Each header field is terminated by '\r\n'. Considering the last header field and the overall header itself are each terminated with '\r\n', and that at least one header is mandatory, this means that two '\r\n' sequences always immediately precede the content part of a message.

Currently the following header fields are supported:

| Header Field Name | Value Type | Description                                                                              |
| :---------------- | :--------- | :--------------------------------------------------------------------------------------- |
| Content-Length    | number     | The length of the content part in bytes. This header is required.                        |
| Content-Type      | string     | The mime type of the content part. Defaults to application/vscode-jsonrpc; charset=utf-8 |

The header part is encoded using the 'ascii' encoding. This includes the '\r\n' separating the header and content part.
