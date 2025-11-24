
import { Link, NavLink } from 'react-router'

export default function Header() {

  const scrollToFooter = () => {
      const footer = document.getElementById('footer');
      footer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'  
      });
  };
  

  return (
    <header className="flex justify-center items-center gap-x-5 py-4 mb-10">
        <NavLink className="text-2xl font-bold">LOGO</NavLink>   
        <nav className="flex gap-x-4">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/admin">Админ-панель</NavLink>
            <NavLink to="/quizes">Квизы</NavLink>
            <NavLink to="/books">Книги</NavLink>
            <NavLink to="/users">Пользователи</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/kt3">Кт3</NavLink>
            <NavLink to="/5kt">5Кт</NavLink>
            <button className='cursor-pointer' onClick={scrollToFooter}>Перейти к футеру</button>
        </nav>
    </header> 
  ) 
}
