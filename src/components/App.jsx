// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import ContactFilter from './Filter/Filter';
// import Section from './Section/Section';

// import { useGetContactsQuery } from 'redux/authApi';

// function App() {
//   const { data: contacts, isLoading } = useGetContactsQuery();

//   return (
//     <Section>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>

//       {contacts?.length > 0 && (
//         <>
//           <ContactFilter />
//         </>
//       )}
//       {isLoading && <p>Loading...</p>}
//       {contacts?.length === 0 && !isLoading && <p>Contact List is empty</p>}
//       <ContactList />
//     </Section>
//   );
// }

// export default App;

import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Contacts from 'view/ContactsView';
import LoginView from 'view/LoginView';
import RegisterView from 'view/RegisterView';
import Navigation from './Navigation/Navigation';
import { getToken } from 'redux/authSlice';
import PrivateRoute from 'route/PrivatRoute';
import PublicRoute from 'route/PublicRoute';
import { useGetCurrentUserQuery } from 'redux/authApi';

function App() {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>{!token && <LoginView />}</PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
