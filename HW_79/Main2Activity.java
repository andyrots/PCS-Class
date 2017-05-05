package com.example.andyrots.myapplication2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class Main2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Bundle bundle = getIntent().getExtras();
        if (bundle == null) {
            return;
        }
        String addedText = (String)bundle.getSerializable("addedText");

        TextView shownText = (TextView)findViewById(R.id.shownText);
        shownText.setText(addedText);
    }
}
