import S from "@sanity/desk-tool/structure-builder";
import { TiUser, TiUserOutline, TiGroup, TiThList, TiTick, TiHome } from 'react-icons/ti';

export default () =>
S.list()
    .title("MurrayJack.tech")
    .items([

        S.listItem()
            .title("My Details")
            .icon(TiUser)
            .child(
                S.editor().schemaType("personalDetails").documentId("personalDetails")
            ),

        S.listItem()
            .title("Job Position")
            .icon(TiHome)
            .child(
                S.documentTypeList('jobposition')
            ),

        S.divider(),

        S.listItem()
            .title("Projects")
            .icon(TiTick)
            .child(
                S.documentTypeList('projects')
            ),

        S.divider(),

        S.listItem()
            .title("Official Details")
            .icon(TiUserOutline)
            .child(
                S.editor().schemaType("derbyInfo").documentId("derbyInfo")
            ),

        S.listItem()
            .title("Leagues")
            .icon(TiThList)
            .child(
                S.documentTypeList('league')
            ),


        S.listItem()
            .title("Tournaments")
            .icon(TiGroup)
            .child(
                S.documentTypeList('tournament')
            ),


        // ...S.documentTypeListItems().filter(listItem => !['derbyInfo'].includes(listItem.getId()))

    ]);