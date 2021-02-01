export const settings = {
  data() {
    return {
      settingKey: "settings"
    };
  },
  methods: {
    readSetting: function(key) {
      /**
       * Read the setting from the localStorage. If it is not present, then
       * return a null value which will indicate the setting needs to
       * fallback to the default value.
       */
      var value = localStorage.getItem(this.settingKey);

      if (!value) return null;

      value = JSON.parse(value);

      if (!(key in value)) return null;
      return value[key];
    },
    getBoolFromValue(value) {
      /**
       * Parse the value into a boolean
       *
       * The settings are saved such that if the setting is set to true,
       * it will be saved as "on" else it will be "off"
       */
      const possibleValues = ["on", "off"];

      if (!possibleValues.includes(value))
        throw `${value} not a valid value. Should be one of ${possibleValues}`;

      return value.toLowerCase() == "on" ? true : false;
    },
    getValueFromBool: function(value) {
      /**
       * Read the value and parse it to on or off based on if it
       * is true or false.
       */
      return value ? "on" : "off";
    },
    getSetting: function(settingKey, parseBool = false) {
      /**
       * Get the setting from the localStorage based on the key
       * passed by the user
       */
      const settingValue = this.readSetting(settingKey);

      return parseBool ? this.getBoolFromValue(settingValue) : settingValue;
    },
    setSetting: function(settingKey, newValue, parseBool = false) {
      /**
       * Set the new value in the setting. We need to read the localStorage
       * first and then parse it, add the new value and then store it back
       * in the storage.
       */
      var value = localStorage.getItem(this.settingKey);

      if (!value) return null;

      value = JSON.parse(value);

      value[settingKey] = parseBool
        ? this.getValueFromBool(newValue)
        : newValue;

      // Save it now.
      localStorage.setItem(this.settingKey, JSON.stringify(value));
    }
  }
};
