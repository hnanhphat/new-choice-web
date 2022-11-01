import * as React from "react";

export type TLanguageContext = {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>> | null;
};

type TLanguageContextProps = {
  children: React.ReactNode;
};

export const LanguageContext = React.createContext<TLanguageContext>({
  lang: '',
  setLang: null
});


export const ThemeProvider = ({
  children,
}: TLanguageContextProps): JSX.Element => {
  const [lang, setLang] = React.useState("ns1");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
