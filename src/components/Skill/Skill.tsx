import React from 'react'; // we need this to make JSX compile

type SkillProps = {
    title: string,
    hasComplete: boolean
}

export const Skill = ({title, hasComplete}: SkillProps) =>
    <div>
        <h2>{title}</h2>
        <p>
            {hasComplete ? "Completed" : "In Progress"}
        </p>
    </div>;

export default Skill;
