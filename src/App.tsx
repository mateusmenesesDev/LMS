import PageContent from './components/PageContent/PageContent';
import AuthProvider from './context/Auth';
import RouteList from './routes/RouteList';

function App() {
  return (
    <>
      <AuthProvider>
        <PageContent>
          <RouteList />
        </PageContent>
      </AuthProvider>
    </>
  );
}

export default App;
