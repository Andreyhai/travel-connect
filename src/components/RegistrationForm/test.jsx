import { useState } from "react";
import { registerUser  } from "../../firebase"; // Импортируйте функцию регистрации

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Сброс ошибки

        try {
            const user = await registerUser (email, password);
            alert("Пользователь зарегистрирован:", user);
            // Перенаправление или другие действия после успешной регистрации
        } catch (error) {
            alert(error.message); // Установка сообщения об ошибке
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                required
            />
            <button type="submit">Зарегистрироваться</button>
            {error && <p>{error}</p>} {/* Отображение ошибки */}
        </form>
    );
}