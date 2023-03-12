export const DateTime = () => {
    const date = new Date();

    const FormatedTime = ((date.getHours().toString()).length < 2 ? ('0' + date.getHours()) : date.getHours()) + ":" + ((date.getMinutes().toString()).length < 2 ? ('0' + date.getMinutes()) : date.getMinutes()) + ":" + ((date.getSeconds().toString()).length < 2 ? ('0' + date.getSeconds()) : date.getSeconds());
    const FormatedDate = ((Number(date.getMonth() + 1).toString()).length < 2 ? ('0' + Number(date.getMonth() + 1)) : Number(date.getMonth() + 1)) + "/" + ((date.getDate().toString()).length < 2 ? ('0' + date.getDate()) : date.getDate()) + "/" + date.getFullYear();

    return FormatedTime + " " + FormatedDate;
}
