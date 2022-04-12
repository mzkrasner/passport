module.exports = {
  post: jest.fn(async (url, data) => {
    switch (url) {
      case "/vTest-Case-1/challenge":
        return {
          data: {
            credential: {
              credentialSubject: {
                challenge: "this is a challenge",
              },
            },
          },
        };
      case "/vTest-Case-1/verify":
        return {
          data: {
            credential: {},
            record: {},
          },
        };
    }
  }),
};