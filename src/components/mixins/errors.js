const error = {
  data() {
    return {
      validCodes: [4, 5]
    };
  },
  methods: {
    isValidErrorCode: function(code) {
      /**
       * Check if the passed error code
       * is valid.
       *
       * We will consider only, 4** and 5**
       * errors valid.
       */
      // We can just divide the code by 100 and
      // if the number is not 4 or 5, it's not
      // valid
      return this.validCodes.includes(parseInt(code / 100));
    },
    extractErrorDetails: function(response, responseJson) {
      /**
       * Extract the error details from the response.
       *
       * This method should only be called when the
       * response is an error (anything other than 20*)?
       */
      const code = response.status;

      // Raise error if code is not valid
      if (!this.isValidErrorCode(code)) throw `${code}: Not a valid error code`;

      // For the message, we will try to extract the
      // response passed by the API. Else we will fall
      // back to the generic response.
      const message = Object.keys(responseJson).includes("detail")
        ? responseJson.detail
        : response.statusText;

      return {
        code: code,
        message: message
      };
    }
  }
};

export default error;
