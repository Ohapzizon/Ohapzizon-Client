import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { themeMode } from "../atoms";
import { ThemeEnums } from "../enum/ThemeEnums";
import Storage from "../Util/Storage";
import Config from "../Constants/Config.json";
import { getTheme } from "../Util/GetTheme";
import { DarkTheme, LightTheme } from "../styles/theme";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ThemeEnums>(themeMode);

  const handleChangeTheme = (): void => {
    if (currentTheme === ThemeEnums.DARK) {
      Storage.set(Config.KEY.THEME, ThemeEnums.LIGHT.toString());
      setCurrentTheme(ThemeEnums.LIGHT);
    } else {
      Storage.set(Config.KEY.THEME, ThemeEnums.DARK.toString());
      setCurrentTheme(ThemeEnums.DARK);
    }
  };

  const theme: DefaultTheme = getTheme() ? DarkTheme : LightTheme;

  return { theme, currentTheme, handleChangeTheme };
};

export default useTheme;
