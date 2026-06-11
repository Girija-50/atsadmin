import { useDropzone } from "react-dropzone";

const UploadResume = ({
  onFileUpload,
}) => {
  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "application/pdf": [".pdf"],
      },

      onDrop: (acceptedFiles) => {
        onFileUpload(
          acceptedFiles[0]
        );
      },
    });

  return (
    <div
      {...getRootProps()}
      style={{
        border:
          "2px dashed #888",
        padding: "40px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input
        {...getInputProps()}
      />

      <h3>
        Drag & Drop Resume Here
      </h3>

      <p>
        or Click to Upload
      </p>
    </div>
  );
};

export default UploadResume;