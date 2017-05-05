package com.example.andyrots.myapplication2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = (Button)findViewById(R.id.button);
        final EditText newText = (EditText)findViewById(R.id.enteredText);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String addedText = newText.getText().toString();
                newText.setText("");
                Intent intent = new Intent(MainActivity.this, Main2Activity.class);
                intent.putExtra("addedText", addedText);
                startActivity(intent);
            }
        });
    }

}
