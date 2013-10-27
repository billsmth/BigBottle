package com.isoftstone.model.todo;

import com.isoftstone.model.ktxx.Ktsq;

public class Todo extends Ktsq {

    private static final long serialVersionUID = 7194286475699906050L;

    /**
     * 1.未授权，转到课题授权UI
     * 2.材料未上报或修改中，转到材料上报UI
     * 3.网络评审-专家，转到专家UI
     * 4.其它末完结状态，转到水办UI
     */
    private String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
