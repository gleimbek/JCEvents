import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.awt.Desktop;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class WhatsAppFileSenderApp extends Application {

    private static final String OUTPUT_FILE_PATH = "output.txt";

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("WhatsApp File Sender");

        TextField textField = new TextField();
        textField.setPromptText("Enter your message here");

        Button submitButton = new Button("Submit and Send to WhatsApp");

        submitButton.setOnAction(e -> {
            String message = textField.getText();
            if (message.isEmpty()) {
                System.out.println("Please enter a message.");
                return;
            }

            // Write the message to a text file
            if (writeMessageToFile(message)) {
                System.out.println("Message saved to file successfully.");
            } else {
                System.out.println("Failed to save message to file.");
                return;
            }

            // Open WhatsApp Web with predefined message
            sendToWhatsApp(message);
        });

        VBox layout = new VBox(10, textField, submitButton);
        layout.setSpacing(10);

        Scene scene = new Scene(layout, 400, 200);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private boolean writeMessageToFile(String message) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(OUTPUT_FILE_PATH))) {
            writer.write(message);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    private void sendToWhatsApp(String message) {
    try {
        String encodedMessage = java.net.URLEncoder.encode(message, "UTF-8");
        String phoneNumber = "17256001802"; // Reemplaza con el número correcto
        String url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

        if (Desktop.isDesktopSupported()) {
            Desktop.getDesktop().browse(new URI(url));
        } else {
            System.out.println("Desktop not supported. Cannot open browser.");
        }
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

