const Alert = ({ type = "success", text }) => {
    const alertStyles = {
      danger: {
        container: "bg-red-800",
        label: "bg-red-500",
        labelText: "Failed",
      },
      success: {
        container: "bg-blue-800",
        label: "bg-blue-500",
        labelText: "Success",
      },
    };
  
    const styles = alertStyles[type] || alertStyles.success;
  
    return (
      <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
        <div
          className={`p-2 ${styles.container} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
          role="alert"
          aria-live="assertive"
        >
          <p className={`flex rounded-full ${styles.
            label} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
            {styles.labelText}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;
  