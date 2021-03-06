var codes = {};

/**
 * Returned when things went as planned.
 */
codes.OK = 200;
codes.SUCCESS = 200;

/**
 * Used when a resource was created
 */
codes.CREATED = 201;

/**
 * Use this to redirect to a temporary URI, such that the browser will continue to request the original
 */
codes.TEMPORARY_REDIRECT = 302;

/**
 * Returned when a request is invalid.  This is a protocol-level error, not an
 * application level error.  Eg, HTTP headers were missing
 */
codes.INVALID_REQUEST = 400;

/**
 * Returned when a request is made by someone we don't recognize at all.
 * (ie, invalid or no credentials offered alongside the request)
 */
codes.INVALID_CREDENTIALS = 401;

/**
 * Returned when a known user is trying to access something that doesn't belong to them.
 */
codes.UNAUTHORIZED_REQUEST = 403;

/**
 * Returned when a page or entity is not found
 */
codes.NOT_FOUND = 404;

/**
 * Used for missing query params in the URL.  This is an application-level error.
 */
codes.MISSING_QUERY_PARAM = 422;

/**
 * Used most often for missing data in a POST, PUT or PATCH request.  This is an application-level error.
 */
codes.MISSING_DATA = 422;

/**
 * Used when data doesn't validate for some reason
 */
codes.INVALID_DATA = 422;

/**
 * This is an unexpected error that should be resolved soon.  A backoff
 * retry approach is usually a good way to handle 500's.
 */
codes.SERVER_ERROR = 500;

/**
 * Unimplemented route or unimplemented code path reached. Implies that a new feature in the future could
 * implement this route or code path.
 */
 codes.UNIMPLEMENTED_ERROR = 501;

module.exports = codes;
