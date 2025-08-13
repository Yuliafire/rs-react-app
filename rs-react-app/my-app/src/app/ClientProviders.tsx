'use client';

import { ThemeProvider } from '../context/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import  Header  from '../components/layout/Header/Header';
import  Footer  from '../components/layout/Footer/Footer';

export default function ClientProviders({
    children,
}: {

  children: React.ReactNode;
}) {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}
