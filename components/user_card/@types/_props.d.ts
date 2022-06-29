import { HTMLAttributes } from "react";
import { userGroupsT } from "./userGroups";

export interface userCardProps extends HTMLAttributes<HTMLDivElement> {

    username: string
    userGroup: userGroupsT
    userEmail: string
    userAvatarURL: string
}