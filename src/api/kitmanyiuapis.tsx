import axios from "axios";
import configuration from "../config/apis";

export const getTitlesWithSkillsByTitle = (title: string) => {
    return axios.get(configuration.api.kitmanapis + '/api/v1/titles/search/' + title);
};


export const getTitlesWithSkills = () => {
    return axios.get(configuration.api.kitmanapis + '/api/v1/titles');
};
