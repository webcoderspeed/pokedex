import type { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '../store/index';
import '../styles/output.tailwind.css';

const WrapperApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrapperApp);
