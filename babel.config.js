module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // see <https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977#gistcomment-3553146>
  // for how to patch `node_modules/react-native`
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'ReactNativeRenderer-prod':
            './node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        },
      },
    ],
  ],
};
