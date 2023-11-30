export const ReviewDirectories = ({ directories }) => {
    return directories.value.map((directory, index) => <li key={index}>{directory.name}</li>) 
}