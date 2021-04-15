module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          root: ['./'],
          include: ['./'],
          alias: {
            config: ['./src/config'],
            modules: ['./src/modules'],
            shared: ['./src/shared'],
          },
        },
      ],
    ],
  };
};
