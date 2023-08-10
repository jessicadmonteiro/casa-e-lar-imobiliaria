import { depositions } from "../../mock/depositions";
import { Title, Ul } from "./style";

export const Depositions = () => {
    const createInitials = (userName: string) => {
        const trimnedName = userName.trim();

        let initials = "";

        let splitedName = [];

        if (trimnedName.indexOf(" ") === -1) {
            initials = initials + trimnedName.charAt(0);
        } else {
            splitedName = trimnedName.split(" ");
            initials =
                splitedName[0].charAt(0) +
                splitedName[splitedName.length - 1].charAt(0);
        }

        return initials.toUpperCase();
    };

    return (
        <>
            <Title>Depoimentos</Title>
            <Ul>
                {depositions.map((dep) => (
                    <li>
                        <span>
                            <div>{createInitials(dep.name)}</div>
                            <h4>{dep.name}</h4>
                        </span>
                        <p>{dep.description}</p>
                    </li>
                ))}
            </Ul>
        </>
    );
};
