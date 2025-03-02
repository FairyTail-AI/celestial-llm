import {useUploadDocuments} from "@/hooks/document/use-upload-documents";

import { useState } from "react";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import {Loader2, Upload} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import * as React from "react";

export const DialogUploadDocumentsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const uploadDocuments = useUploadDocuments();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error("Пожалуйста, выберите файлы для загрузки");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    uploadDocuments.mutate(formData, {
      onError: () => {
        toast.error("Не удалось загрузить документы");
      },
      onSuccess: () => {
        toast.success(`${files.length} документов успешно загружено`);

        setFiles([]);
        setIsOpen(false);
      },
    })
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="w-4 h-4 mr-2" />

          Загрузить Документы
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl flex flex-col">
        <DialogHeader>
          <DialogTitle>Загрузить Документы</DialogTitle>
          <DialogDescription>
            Перетащите файлы сюда или нажмите, чтобы выбрать файлы.
            Поддерживаемые форматы: PDF, DOCX, XLSX. Максимальный размер: 50МБ.
          </DialogDescription>
        </DialogHeader>

        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-colors overflow-hidden flex flex-col justify-center items-center
            ${isDragActive ? "border-primary bg-primary/10" : "border-muted"}
            ${files.length > 0 ? "border-primary" : ""}
          `}
        >
          <input {...getInputProps()} />
          {files.length === 0 ? (
            <div className="text-muted-foreground">
              {isDragActive ? (
                <p>Перетащите файлы сюда...</p>
              ) : (
                <p>Перетащите файлы сюда или нажмите для выбора</p>
              )}
            </div>
          ) : (
            <div className="break-all">
              {files.map((file, index) => {
                const text = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`

                if (index !== 0) {
                  return `, ${text}`
                }

                return text;
              })}
            </div>
          )}
        </div>

        {uploadDocuments.isPending && (
          <div className="space-y-2">
            <Progress value={33} />
            <p className="text-sm text-muted-foreground text-center">
              Загрузка ${files.length} документов...
            </p>
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={uploadDocuments.isPending}
          >
            Отмена
          </Button>
          <Button
            onClick={handleUpload}
            disabled={files.length === 0 || uploadDocuments.isPending}
          >
            {uploadDocuments.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Загрузка...
              </>
            ) : (
              <>Загрузить</>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}